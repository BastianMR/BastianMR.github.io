import { entryFilter } from "./entryFilter";
import type { ContentEntry } from "./content";
import { slugifyStr } from "./slugify";

type Tag = {
  tag: string;
  tagName: string;
};

/**
 * Builds a de-duplicated, sorted tag list from any dated collection.
 *
 * - Drafts and scheduled entries are excluded via `entryFilter()`
 * - `tag` is the slug used in URLs; `tagName` is the original label for display
 * - Uniqueness is based on the slug (so differently-cased labels collapse)
 * - Posts and news share one tag namespace, so a tag page can list both
 */
export function getUniqueTags(entries: ContentEntry[]) {
  const tags: Tag[] = entries
    .filter(entryFilter)
    .flatMap(entry => entry.data.tags)
    .map(tag => ({ tag: slugifyStr(tag), tagName: tag }))
    .filter(
      (value, index, self) =>
        self.findIndex(tag => tag.tag === value.tag) === index
    )
    .sort((tagA, tagB) => tagA.tag.localeCompare(tagB.tag));
  return tags;
}
