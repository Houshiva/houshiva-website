// @ts-check
/**
 * Locks the /admin page behind an email + password on a static host.
 *
 * After the build, everything between the `data-admin-start` / `data-admin-end`
 * markers in dist/admin/index.html is encrypted (AES-256-GCM, key from
 * PBKDF2-SHA256 over the password, salted with random bytes + the email) and
 * replaced by the ciphertext. The page's login form derives the same key in
 * the browser; a wrong email or password simply fails to decrypt.
 *
 * Credentials come from the ADMIN_EMAIL / ADMIN_PASSWORD environment variables
 * (GitHub Actions secrets in production). Without them the panel content is
 * removed entirely and the page says the panel is not configured.
 *
 * The protection is only as strong as the password: anyone can download the
 * ciphertext and guess offline, so the password must be long and unique.
 */
import { readFile, writeFile } from 'node:fs/promises';
import { webcrypto as crypto } from 'node:crypto';

export const ADMIN_PBKDF2_ITERATIONS = 600_000;

const MARKERS = /<i hidden(?:="")? data-admin-start(?:="")?><\/i>([\s\S]*?)<i hidden(?:="")? data-admin-end(?:="")?><\/i>/;
const PAYLOAD_SLOT = /<script type="application\/json" id="admin-payload">[\s\S]*?<\/script>/;

/** @param {Uint8Array} bytes */
const b64 = (bytes) => Buffer.from(bytes).toString('base64');

/**
 * @param {string} plaintext
 * @param {string} email
 * @param {string} password
 */
async function encrypt(plaintext, email, password) {
  const enc = new TextEncoder();
  const salt = crypto.getRandomValues(new Uint8Array(16));
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const saltWithEmail = new Uint8Array([...salt, ...enc.encode(email.trim().toLowerCase())]);
  const material = await crypto.subtle.importKey('raw', enc.encode(password), 'PBKDF2', false, ['deriveKey']);
  const key = await crypto.subtle.deriveKey(
    { name: 'PBKDF2', hash: 'SHA-256', salt: saltWithEmail, iterations: ADMIN_PBKDF2_ITERATIONS },
    material,
    { name: 'AES-GCM', length: 256 },
    false,
    ['encrypt'],
  );
  const data = await crypto.subtle.encrypt({ name: 'AES-GCM', iv }, key, enc.encode(plaintext));
  return { v: 1, iter: ADMIN_PBKDF2_ITERATIONS, salt: b64(salt), iv: b64(iv), data: b64(new Uint8Array(data)) };
}

/** @returns {import('astro').AstroIntegration} */
export default function adminLock() {
  return {
    name: 'houshiva-admin-lock',
    hooks: {
      'astro:build:done': async ({ dir, logger }) => {
        const file = new URL('admin/index.html', dir);
        const html = await readFile(file, 'utf8');
        const match = html.match(MARKERS);
        if (!match || !PAYLOAD_SLOT.test(html)) {
          throw new Error('admin-lock: markers or payload slot not found in dist/admin/index.html');
        }

        const email = process.env.ADMIN_EMAIL ?? '';
        const password = process.env.ADMIN_PASSWORD ?? '';
        let payload = null;
        if (email && password) {
          if (password.length < 12) logger.warn('ADMIN_PASSWORD is shorter than 12 characters; it can be guessed offline.');
          payload = await encrypt(match[1], email, password);
        } else {
          logger.warn('ADMIN_EMAIL / ADMIN_PASSWORD not set: the admin panel content is left out of the build.');
        }

        const json = JSON.stringify(payload).replace(/</g, '\\u003c');
        const out = html
          .replace(MARKERS, '')
          .replace(PAYLOAD_SLOT, `<script type="application/json" id="admin-payload">${json}</script>`);
        await writeFile(file, out);
        logger.info(payload ? 'admin panel encrypted' : 'admin panel content removed (no credentials)');
      },
    },
  };
}
