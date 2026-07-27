# itzemoji.com

Personal site of Cyril Dettling. Built with Astro and Bun.

## Develop

```bash
bun install
bun run dev      # local dev server
bun run build    # static output to dist/
bun run check    # typecheck + content schema validation
```

## Adding a project

Drop a Markdown file into `src/content/projects/`. The frontmatter is validated
against the schema in `src/content.config.ts`, so a missing or malformed field
fails `bun run check` with the field name rather than rendering an empty page.

```yaml
---
title: Example
summary: One line, under 160 characters.
order: 5
year: "2026"
tech: ["Nix"]
repo: "https://github.com/ItzEmoji/example"
status: "active" # active | maintained | archived
---
```

## Configuration

`site.config.ts` is the single source of truth for identity: name, email, every
social link, the hero copy, and the nav. No component hardcodes any of them.

## Credits

Built on the [Space Ahead](https://github.com/djsiddz/space-ahead) Astro theme by
Siddhesh Thadeshwar, used under GPL-3.0.

Changes from the original theme:

- Kanit and Sigmar, loaded from Google Fonts, replaced with self-hosted
  JetBrains Mono. No external font requests.
- The `space-red` / `space-yellow` hover accents removed. Emphasis is
  monochrome, carried by value and underline. See the `--accent-*` variables in
  `src/styles/global.css` to put a hue back.
- Blog, tags, pagination, RSS and the subscribe form removed. This site has a
  projects collection instead.
- Preact dropped, since the only component using it was removed.
- The theme's stock illustrations are not included.
- Document structure uses real landmarks; the original nested `<nav>` and
  `<footer>` inside `<main>`.
- Theme toggle and mobile menu scripts rewritten to avoid implicit globals and
  to null-check their elements.

## License

GPL-3.0-or-later, inherited from the Space Ahead theme. See [LICENSE](LICENSE).
