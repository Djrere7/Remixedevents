// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Production domain (the no-www apex is the primary/canonical host; www redirects to it).
export default defineConfig({
  site: 'https://remixedeventsllc.com',
  integrations: [sitemap()],
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
});
