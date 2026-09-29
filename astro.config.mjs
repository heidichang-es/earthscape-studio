// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://earthscape-studio.com',
  trailingSlash: 'never',
  integrations: [
    sitemap({
      // Visit is still WIP / coming-soon. Re-include it in the sitemap
      // once it ships real content.
      filter: (page) =>
        !page.startsWith('https://earthscape-studio.com/visit'),
    }),
  ],
  build: {
    format: 'file',
  },
});
