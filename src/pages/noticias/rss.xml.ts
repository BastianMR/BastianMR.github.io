import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { getSortedEntries } from "@/utils/getSortedEntries";
import { getEntryUrl } from "@/utils/getEntryPaths";
import config from "@/config";

/**
 * News feed. Kept separate from `/rss.xml` (posts only) so subscribers to the
 * blog keep receiving exactly what they signed up for.
 */
export async function GET() {
  const news = await getCollection("news");
  const sortedNews = getSortedEntries(news);

  return rss({
    title: `${config.site.title} — Noticias`,
    description: `Noticias de tecnología e inteligencia artificial de ${config.site.title}.`,
    site: config.site.url,
    items: sortedNews.map(({ data, id, filePath }) => ({
      link: getEntryUrl("news", id, filePath, config.site.lang),
      title: data.title,
      description: data.description,
      pubDate: new Date(data.modDatetime ?? data.pubDatetime),
      // The category is also a natural tag; keep each label once.
      categories: [...new Set([data.category, ...data.tags])],
    })),
  });
}
