import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      category: z.string(),
      publishDate: z.date(),
      readingTime: z.string(),
      icon: z.string(),
      coverImage: image(),
    }),
});

export const collections = { articles };
