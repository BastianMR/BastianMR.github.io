import type { CollectionEntry } from "astro:content";
import { entryFilter } from "./entryFilter";

/**
 * Returns entries that are eligible to be shown to users, sorted by “last
 * updated” descending (uses `modDatetime` when present, otherwise
 * `pubDatetime`).
 *
 * Works for any dated collection; the entry type is preserved so callers keep
 * their collection-specific fields.
 *
 * Note: filtering respects drafts and scheduled entries via `entryFilter()`.
 */
export function getSortedEntries<
  T extends CollectionEntry<"posts"> | CollectionEntry<"news">,
>(entries: T[]) {
  return entries
    .filter(entryFilter)
    .sort(
      (a, b) =>
        Math.floor(
          new Date(b.data.modDatetime ?? b.data.pubDatetime).getTime() / 1000
        ) -
        Math.floor(
          new Date(a.data.modDatetime ?? a.data.pubDatetime).getTime() / 1000
        )
    );
}
