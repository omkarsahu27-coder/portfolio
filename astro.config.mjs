import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://portfolio-7bbh-theta.vercel.app/', // Ensure this matches site.ts
  integrations: [sitemap()],
  compressHTML: true, // Performance optimization
});

// export default defineConfig({
//   site: 'https://omkarsahu27-coder.github.io',
//   base: '/portfolio', // Change this to match your exact GitHub repository name (or remove the line if using a custom domain or user root page)
//   integrations: [sitemap()],
// });