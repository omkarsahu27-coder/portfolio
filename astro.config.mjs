import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';


export default defineConfig({
  site: 'https://portfolio-omkar-sahu.vercel.app', 
  integrations: [sitemap()],
});
