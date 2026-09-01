import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://www.elcreadorweb.mx/',
  vite: {
    server: {
      host: '0.0.0.0',
      port: 4321
    },

    plugins: [tailwindcss()]
  }
});