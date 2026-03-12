// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://klauszellner1987.github.io',
  base: '/monika-stitch',
  vite: {
    plugins: [tailwindcss()]
  }
});
