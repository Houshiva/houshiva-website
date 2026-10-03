// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import adminLock from './integrations/admin-lock.mjs';

// https://astro.build/config
export default defineConfig({
  site: 'https://houshiva.ir',
  integrations: [sitemap({ filter: (page) => !page.includes('/admin') }), adminLock()],
});
