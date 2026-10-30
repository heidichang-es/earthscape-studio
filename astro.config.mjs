// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import rehypeJournalFigures from './src/plugins/rehype-journal-figures.mjs';

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
  markdown: {
    // Wrap standalone images (with alt text) in <figure> + <figcaption>
    rehypePlugins: [rehypeJournalFigures],
  },
  build: {
    format: 'file',
  },
});
