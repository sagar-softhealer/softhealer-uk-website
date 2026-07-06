import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const pages = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.date().or(z.string()).optional(),
  }),
});

const blogs = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/blogs' }),
  schema: z.object({
    title: z.string(),
    date: z.date().or(z.string()),
    author: z.string().default('Softhealer Team'),
    image: z.string().optional(),
    description: z.string(),
  }),
});

export const collections = { pages, blogs };
