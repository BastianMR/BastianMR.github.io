import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";
import config from "@/config";

export const BLOG_PATH = "src/content/posts";
export const NEWS_PATH = "src/content/news";

/**
 * Fixed news categories. They are the coarse grouping of `/noticias/` and must
 * stay stable: each one has a public URL (`/noticias/categoria/<id>/`). Free-form
 * classification is what `tags` is for.
 */
export const NEWS_CATEGORIES = [
  { id: "ia", label: "Inteligencia artificial" },
  { id: "software", label: "Software y desarrollo" },
  { id: "hardware", label: "Hardware y dispositivos" },
  { id: "negocios", label: "Negocios y mercado" },
  { id: "ciencia", label: "Ciencia e investigación" },
] as const;

export type NewsCategory = (typeof NEWS_CATEGORIES)[number]["id"];

const newsCategoryIds = NEWS_CATEGORIES.map(category => category.id) as [
  NewsCategory,
  ...NewsCategory[],
];

/** Display label for a news category id, falling back to the raw id. */
export function getNewsCategoryLabel(categoryId: string): string {
  return (
    NEWS_CATEGORIES.find(category => category.id === categoryId)?.label ??
    categoryId
  );
}

const posts = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: `./${BLOG_PATH}` }),
  schema: ({ image }) =>
    z.object({
      author: z.string().default(config.site.author),
      pubDatetime: z.date(),
      modDatetime: z.date().optional().nullable(),
      title: z.string(),
      featured: z.boolean().optional(),
      draft: z.boolean().optional(),
      tags: z.array(z.string()).default(["others"]),
      ogImage: image().or(z.string()).optional(),
      description: z.string(),
      canonicalURL: z.string().optional(),
      hideEditPost: z.boolean().optional(),
      timezone: z.string().optional(),
    }),
});

const news = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: `./${NEWS_PATH}` }),
  schema: ({ image }) =>
    z.object({
      author: z.string().default(config.site.author),
      pubDatetime: z.date(),
      modDatetime: z.date().optional().nullable(),
      title: z.string(),
      draft: z.boolean().optional(),
      tags: z.array(z.string()).default(["others"]),
      category: z.enum(newsCategoryIds),
      /** Attribution is mandatory: a news item without a source is not verifiable. */
      source: z.object({
        name: z.string(),
        url: z.url(),
      }),
      ogImage: image().or(z.string()).optional(),
      description: z.string(),
      canonicalURL: z.string().optional(),
      timezone: z.string().optional(),
    }),
});

const pages = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/pages" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    ogImage: z.string().optional(),
    canonicalURL: z.string().optional(),
  }),
});

export const collections = { posts, pages, news };
