import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://your-portfolio-url.com',
  integrations: [sitemap()],
  compressHTML: true,
  build: {
    format: 'directory'
  }
});