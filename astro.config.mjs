// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

import sitemap from '@astrojs/sitemap';
import path from "path";

// https://astro.build/config
export default defineConfig({
  vite: {
    resolve: {
      alias: {
        "@": path.resolve("./src")
      }
    },
    plugins: [tailwindcss()]
  },
  site: "https://www.boris-picard.com/",
  integrations: [react(), sitemap()]
});