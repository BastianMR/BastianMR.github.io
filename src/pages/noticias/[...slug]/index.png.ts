import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { getEntrySlug } from "@/utils/getEntryPaths";
import { renderOgImage } from "@/utils/renderOgImage";
import config from "@/config";

export async function getStaticPaths() {
  if (!config.features.dynamicOgImage) {
    return [];
  }

  const news = await getCollection("news").then(n =>
    n.filter(({ data }) => !data.draft && !data.ogImage)
  );

  return news.map(entry => ({
    params: { slug: getEntrySlug(entry.collection, entry.id, entry.filePath) },
    props: entry,
  }));
}

export const GET: APIRoute = async ({ props, url }) => {
  if (!config.features.dynamicOgImage) {
    return new Response(null, { status: 404, statusText: "Not found" });
  }

  return renderOgImage({
    title: props.data.title,
    author: props.data.author,
    url,
  });
};
