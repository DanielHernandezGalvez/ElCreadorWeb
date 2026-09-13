import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const projects = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/proyectos",
  }),

  schema: z.object({
    title: z.string(),

    description: z.string(),

    category: z.string(),

    type: z.string(),

    technologies: z.array(z.string()),

    thumbnail: z.string(),

    youtubeId: z.string().optional(),

    featured: z.boolean().default(false),
  }),
});

const blog = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/blog",
  }),

  schema: z.object({
    title: z.string(),

    description: z.string(),

    pubDate: z.coerce.date(),

    updatedDate: z.coerce.date().optional(),

    category: z.string(),

    tags: z.array(z.string()).default([]),

    thumbnail: z.string(),

    author: z.string().default("El Creador Web"),

    youtubeId: z.string().optional(),

    draft: z.boolean().default(false),

    featured: z.boolean().default(false),
  }),
});

export const collections = {
  projects,
  blog,
};