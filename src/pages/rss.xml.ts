import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { getSortedEntries } from "@/utils/getSortedEntries";
import { getEntryUrl } from "@/utils/getEntryPaths";
import config from "@/config";

export async function GET() {
  const posts = await getCollection("posts");
  const sortedPosts = getSortedEntries(posts);

  return rss({
    title: config.site.title,
    description: config.site.description,
    site: config.site.url,
    items: sortedPosts.map(({ data, id, filePath }) => ({
      link: getEntryUrl("posts", id, filePath, config.site.lang),
      title: data.title,
      description: data.description,
      pubDate: new Date(data.modDatetime ?? data.pubDatetime),
    })),
  });
}
