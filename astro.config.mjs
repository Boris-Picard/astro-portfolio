// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import path from "path";

// https://astro.build/config
export default defineConfig({
  devToolbar: {
    enabled: false
  },
  build: {
    inlineStylesheets: "always"
  },
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
