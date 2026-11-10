import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://omkarsahu.dev', // Ensure this matches site.ts
  integrations: [sitemap()],
  compressHTML: true, // Performance optimization
});