import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

const posts = await getCollection("posts");

export const GET = () =>
	rss({
		title: "lewisakura",
		description: "Ramblings, mainly, but sometimes intelligence.",
		site: "https://lewisakura.moe",
		items: posts.map(({ data, slug }) => ({
			link: new URL(`/posts/${slug}`, "https://lewisakura.moe").href,
			title: data.title,
			pubDate: data.createdAt,
			description: data.description,
		})),
	});
