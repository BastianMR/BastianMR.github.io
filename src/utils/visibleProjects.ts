import type { CollectionEntry } from "astro:content";
import { PROJECT_STATUSES, type ProjectStatus } from "@/content.config";

export type ProjectEntry = CollectionEntry<"projects">;

/**
 * Projects a listing may show.
 *
 * - `draft: true` is always excluded.
 * - `idea` is a private backlog: it renders while authoring (`astro dev`) and
 *   never in a production build, so the site never publishes a promise the
 *   author has not started.
 */
export function visibleProjects(projects: ProjectEntry[]) {
  return projects
    .filter(({ data }) => !data.draft)
    .filter(({ data }) => import.meta.env.DEV || data.status !== "idea");
}

/** Newest activity first; projects without dates sort last. */
function byUpdatedDesc(a: ProjectEntry, b: ProjectEntry) {
  const aTime = (a.data.updatedAt ?? a.data.startedAt)?.getTime() ?? 0;
  const bTime = (b.data.updatedAt ?? b.data.startedAt)?.getTime() ?? 0;
  return bTime - aTime;
}

/** Groups projects by state, following the reading order of PROJECT_STATUSES. */
export function groupProjectsByStatus(projects: ProjectEntry[]) {
  return PROJECT_STATUSES.map(status => ({
    status: status as ProjectStatus,
    entries: projects
      .filter(({ data }) => data.status === status)
      .sort(byUpdatedDesc),
  })).filter(group => group.entries.length > 0);
}
