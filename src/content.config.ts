import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'zod';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    publishedAt: z.coerce.date().optional(),
    year: z.string(),
    period: z.string().optional(),
    role: z.string(),
    categories: z.array(z.string()),
    technologies: z.array(z.string()),
    featured: z.boolean().default(false),
    order: z.number().optional(),
    status: z.enum(['completed', 'ongoing', 'experiment']).default('completed'),
    coverImage: z.string(),
    coverAlt: z.string(),
    heroImage: z.string().optional(),
    heroAlt: z.string().optional(),
    repositoryUrl: z.string().url().optional(),
    liveUrl: z.string().url().optional(),
    videoUrl: z.string().optional(),
    videoPoster: z.string().optional(),
    gallery: z
      .array(
        z.object({
          src: z.string(),
          alt: z.string(),
          caption: z.string().optional(),
        }),
      )
      .optional(),
    seoTitle: z.string().optional(),
    seoDescription: z.string().optional(),
    draft: z.boolean().default(false),
    hasDummyData: z.boolean().default(false),
  }),
});

const notes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/notes' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    tags: z.array(z.string()),
    coverImage: z.string().optional(),
    coverAlt: z.string().optional(),
    draft: z.boolean().default(true),
    seoTitle: z.string().optional(),
    seoDescription: z.string().optional(),
  }),
});

export const collections = { projects, notes };
