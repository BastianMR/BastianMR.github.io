import config from "@/config";
import type { ContentEntry } from "./content";

/**
 * Determines whether an entry is eligible to be listed/rendered.
 *
 * Applies to every dated collection (posts and news):
 * - Excludes drafts always
 * - In production, excludes scheduled entries until `pubDatetime` minus the
 *   configured margin
 * - In dev, always shows non-draft entries to make authoring easier
 */
export function entryFilter({ data }: ContentEntry) {
  const isPublishTimePassed =
    Date.now() >
    new Date(data.pubDatetime).getTime() - config.posts.scheduledPostMargin;
  return !data.draft && (import.meta.env.DEV || isPublishTimePassed);
}
