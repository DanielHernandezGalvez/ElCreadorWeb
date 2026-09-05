import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.elcreadorweb.mx/',
  output: 'static',
  vite: {
    server: {
      host: '0.0.0.0',
      port: 4321
    },
    plugins: [tailwindcss()]
  },
  integrations: [sitemap()]
});