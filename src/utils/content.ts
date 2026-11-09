import type { CollectionEntry } from "astro:content";

/** Content collections rendered as dated entries (blog posts and news). */
export const CONTENT_COLLECTIONS = ["posts", "news"] as const;

export type ContentCollection = (typeof CONTENT_COLLECTIONS)[number];

/**
 * Any entry from a dated collection. Shared listing pieces (cards, pagination,
 * tag pages) accept this union so both collections render through the same path.
 */
export type ContentEntry = CollectionEntry<"posts"> | CollectionEntry<"news">;
