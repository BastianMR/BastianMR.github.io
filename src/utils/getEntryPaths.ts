import { getRelativeLocaleUrl } from "astro:i18n";
import { BLOG_PATH, NEWS_PATH } from "@/content.config";
import type { ContentCollection } from "./content";
import { slugifyStr } from "./slugify";
import config from "@/config";

/** Public URL segment of each collection, e.g. `/noticias/<slug>`. */
const ROUTE_SEGMENT: Record<ContentCollection, string> = {
  posts: "posts",
  news: "noticias",
};

/** Directory each collection is loaded from; stripped to build the slug. */
const CONTENT_BASE_PATH: Record<ContentCollection, string> = {
  posts: BLOG_PATH,
  news: NEWS_PATH,
};

function getEntryPathSegments(
  collection: ContentCollection,
  filePath: string | undefined
): string[] {
  return (
    filePath
      ?.replace(CONTENT_BASE_PATH[collection], "")
      .split("/")
      .filter(path => path !== "")
      .filter(path => !path.startsWith("_"))
      .slice(0, -1)
      .map(segment => slugifyStr(segment)) ?? []
  );
}

function getIdSlug(id: string): string {
  const postId = id.split("/");
  return postId.length > 0 ? String(postId[postId.length - 1]) : id;
}

function getEntrySlugPath(
  collection: ContentCollection,
  id: string,
  filePath: string | undefined
): string {
  const pathSegments = getEntryPathSegments(collection, filePath);
  const slug = getIdSlug(id);
  return pathSegments.length > 0
    ? [...pathSegments, slug].join("/")
    : String(slug);
}

/**
 * Returns the slug-only path for use as a route param in `getStaticPaths`.
 * No base prefix, no locale — Astro handles those at a higher level.
 * e.g. `/examples/my-post` or `/my-news`
 */
export function getEntrySlug(
  collection: ContentCollection,
  id: string,
  filePath: string | undefined
): string {
  return `/${getEntrySlugPath(collection, id, filePath)}`;
}

/**
 * Returns a fully navigable URL for use in `<a href>` and RSS links.
 * Applies both locale routing and the configured Astro base via
 * `getRelativeLocaleUrl`.
 * e.g. `/posts/my-post`, `/en/posts/my-post` or `/noticias/my-news`
 */
export function getEntryUrl(
  collection: ContentCollection,
  id: string,
  filePath: string | undefined,
  locale: string | undefined = config.site.lang
): string {
  return getRelativeLocaleUrl(
    locale,
    `${ROUTE_SEGMENT[collection]}/${getEntrySlugPath(collection, id, filePath)}`
  );
}
