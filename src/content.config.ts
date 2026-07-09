import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const pages = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.date().or(z.string()).optional(),
    showcase_title: z.string().optional(),
    showcase_description: z.string().optional(),
    showcase_features: z.array(z.object({
      title: z.string(),
      description: z.string(),
    })).optional(),
    story_title: z.string().optional(),
    story_body: z.string().optional(),
    stats: z.array(z.object({
      number: z.string(),
      label: z.string(),
    })).optional(),
    values: z.array(z.object({
      icon: z.string(),
      title: z.string(),
      description: z.string(),
    })).optional(),
    services: z.array(z.object({
      icon: z.string(),
      title: z.string(),
      description: z.string(),
      features: z.array(z.string()).optional(),
    })).optional(),
    info_title: z.string().optional(),
    info_description: z.string().optional(),
    location: z.string().optional(),
    email: z.string().optional(),
    phone: z.string().optional(),
    hours: z.string().optional(),
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
