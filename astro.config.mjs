// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://earthscape-studio.com',
  trailingSlash: 'never',
  integrations: [
    sitemap({
      // Works and visit are still WIP / coming-soon. Re-include each one
      // in sitemap as it ships real content.
      filter: (page) =>
        !page.startsWith('https://earthscape-studio.com/works') &&
        !page.startsWith('https://earthscape-studio.com/visit'),
    }),
  ],
  build: {
    format: 'file',
  },
});
