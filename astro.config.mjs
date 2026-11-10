import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';


export default defineConfig({
  // THIS LINE IS REQUIRED FOR THE SITEMAP PLUGIN:
  site: 'https://portfolio-omkar-sahu.vercel.app', 
  integrations: [sitemap()],
});
