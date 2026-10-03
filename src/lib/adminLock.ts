/**
 * Browser side of the /admin lock (see integrations/admin-lock.mjs): derives
 * the key from email + password, decrypts the panel and keeps the derived key
 * in sessionStorage so reloading the tab (or opening /admin/cms in it) doesn't
 * ask again. Closing the tab or «خروج» forgets it.
 */
export const ADMIN_SESSION_KEY = 'houshiva-admin-key';

interface Payload {
  v: number;
  iter: number;
  salt: string;
  iv: string;
  data: string;
}

const fromB64 = (s: string) => Uint8Array.from(atob(s), (c) => c.charCodeAt(0));
const toB64 = (bytes: ArrayBuffer) => btoa(String.fromCharCode(...new Uint8Array(bytes)));

async function deriveKey(email: string, password: string, payload: Payload) {
  const enc = new TextEncoder();
  const salt = new Uint8Array([...fromB64(payload.salt), ...enc.encode(email.trim().toLowerCase())]);
  const material = await crypto.subtle.importKey('raw', enc.encode(password), 'PBKDF2', false, ['deriveKey']);
  return crypto.subtle.deriveKey(
    { name: 'PBKDF2', hash: 'SHA-256', salt, iterations: payload.iter },
    material,
    { name: 'AES-GCM', length: 256 },
    true,
    ['decrypt'],
  );
}

async function decrypt(key: CryptoKey, payload: Payload) {
  const plain = await crypto.subtle.decrypt({ name: 'AES-GCM', iv: fromB64(payload.iv) }, key, fromB64(payload.data));
  return new TextDecoder().decode(plain);
}

function readSession() {
  try {
    return sessionStorage.getItem(ADMIN_SESSION_KEY);
  } catch {
    return null;
  }
}

/** Shows the login form (or the panel, if already unlocked in this tab) and calls `init` once the panel is in the page. */
export async function unlockAdmin(init: () => void) {
  const login = document.getElementById('admin-login')!;
  const form = document.getElementById('admin-login-form') as HTMLFormElement;
  const off = document.getElementById('admin-login-off')!;
  const error = document.getElementById('admin-login-error')!;
  const submit = document.getElementById('admin-login-submit') as HTMLButtonElement;
  const root = document.getElementById('admin-root')!;

  const finish = (html?: string) => {
    if (html) root.innerHTML = html;
    login.classList.add('is-done');
    init();
  };

  // `astro dev` serves the page unencrypted; the content is already there.
  if (document.querySelector('.admin')) return finish();

  const payload: Payload | null = JSON.parse(document.getElementById('admin-payload')?.textContent || 'null');
  if (!payload) {
    off.hidden = false;
    return;
  }

  const cached = readSession();
  if (cached) {
    try {
      const key = await crypto.subtle.importKey('raw', fromB64(cached), 'AES-GCM', false, ['decrypt']);
      return finish(await decrypt(key, payload));
    } catch {
      sessionStorage.removeItem(ADMIN_SESSION_KEY);
    }
  }

  form.hidden = false;
  (document.getElementById('admin-email') as HTMLInputElement).focus();

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    error.hidden = true;
    submit.disabled = true;
    submit.textContent = 'در حال بررسی…';
    try {
      const email = (document.getElementById('admin-email') as HTMLInputElement).value;
      const password = (document.getElementById('admin-password') as HTMLInputElement).value;
      const key = await deriveKey(email, password, payload);
      const html = await decrypt(key, payload);
      try {
        sessionStorage.setItem(ADMIN_SESSION_KEY, toB64(await crypto.subtle.exportKey('raw', key)));
      } catch {}
      finish(html);
    } catch {
      error.hidden = false;
      submit.disabled = false;
      submit.textContent = 'ورود';
    }
  });
}

export function lockAdmin() {
  try {
    sessionStorage.removeItem(ADMIN_SESSION_KEY);
  } catch {}
  location.reload();
}
