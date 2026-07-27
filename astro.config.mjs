// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import swup, { Theme } from "@swup/astro";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://itzemoji.com",
  integrations: [
    // Page transitions, as the theme ships them. `containers` must match the
    // element the layout swaps; leaving it at the default would swap <main>
    // and take the nav with it.
    swup({
      // Theme is a TS enum, so the bare string "overlay" fails the typecheck
      // even though it is the value the enum resolves to.
      theme: [Theme.overlay, { direction: "to-top" }],
      containers: ["#swup"],
      cache: true,
      progress: true,
    }),
    sitemap(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
