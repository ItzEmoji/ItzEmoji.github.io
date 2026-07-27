// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://itzemoji.com",
  integrations: [sitemap()],
  build: {
    // One stylesheet rather than a request per component.
    inlineStylesheets: "auto",
  },
  markdown: {
    shikiConfig: {
      themes: { light: "github-light", dark: "github-dark" },
      wrap: true,
    },
  },
});
