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
  image: {
    // Lets <Image> pull the GitHub avatar at build time. It is downloaded,
    // converted to WebP and emitted into dist/, so visitors never request
    // anything from GitHub. The cost is that a build now needs network access
    // to this host.
    domains: ["avatars.githubusercontent.com"],
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
