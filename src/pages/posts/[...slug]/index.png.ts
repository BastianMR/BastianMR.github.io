import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { getEntrySlug } from "@/utils/getEntryPaths";
import { renderOgImage } from "@/utils/renderOgImage";
import config from "@/config";

export async function getStaticPaths() {
  if (!config.features.dynamicOgImage) {
    return [];
  }

  const posts = await getCollection("posts").then(p =>
    p.filter(({ data }) => !data.draft && !data.ogImage)
  );

  return posts.map(post => ({
    params: { slug: getEntrySlug(post.collection, post.id, post.filePath) },
    props: post,
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
