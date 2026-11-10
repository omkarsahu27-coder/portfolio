import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// export default defineConfig({
//   site: 'https://omkarsahu.dev', // Ensure this matches site.ts
//   integrations: [sitemap()],
//   compressHTML: true, // Performance optimization
// });

export default defineConfig({
  site: 'https://omkarsahu27-coder.github.io',
  base: '/portfolio', // Omit if using a custom domain or user root page
  // ... rest of config
});