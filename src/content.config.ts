import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
// Imported directly rather than from astro:content, whose re-exported `z` is
// deprecated in Astro 7.
import { z } from "zod";

/**
 * Adding a project is one Markdown file in src/content/projects/.
 * The schema is strict on purpose: a missing field fails `astro check` by name,
 * instead of quietly rendering an empty section.
 */
const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    /** One line. Shown on the project cards — keep it under ~160 characters. */
    summary: z.string().max(160),
    /** Controls order on the index. 1 is the flagship. */
    order: z.number().int().positive(),
    year: z.string(),
    tech: z.array(z.string()).nonempty(),
    repo: z.url(),
    /** Optional live site or docs, shown alongside the repo link. */
    link: z.url().optional(),
    status: z.enum(["active", "maintained", "archived"]).default("active"),
  }),
});

export const collections = { projects };
