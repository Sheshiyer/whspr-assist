import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://sheshiyer.github.io',
  base: '/whspr-assist',
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
    },
  },
});
