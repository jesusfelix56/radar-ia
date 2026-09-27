// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

import { lastmodForPath } from './src/lib/content-dates.mjs';

function resolveSite() {
  const explicit = process.env.PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/$/, '');
  return 'https://loprobamosai.es';
}

const site = resolveSite();

export default defineConfig({
  site,
  trailingSlash: 'never',
  build: { format: 'directory' },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
      i18n: { defaultLocale: 'es', locales: { es: 'es-ES' } },
      serialize(item) {
        const lastmod = lastmodForPath(new URL(item.url).pathname);
        if (lastmod) item.lastmod = `${lastmod}T00:00:00.000Z`;
        return item;
      },
    }),
  ],
  // Las fuentes se descargan en el build y se sirven desde tu propio dominio:
  // sin peticiones a Google en el navegador del visitante.
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Inter',
      cssVariable: '--font-inter',
      weights: [400, 500, 600, 700],
      subsets: ['latin'],
      fallbacks: ['system-ui', 'sans-serif'],
    },
    {
      provider: fontProviders.google(),
      name: 'Sora',
      cssVariable: '--font-sora',
      weights: [600, 700],
      subsets: ['latin'],
      fallbacks: ['system-ui', 'sans-serif'],
    },
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
