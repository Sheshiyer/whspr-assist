import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://whspr-assist.vercel.app',
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
    },
  },
});
