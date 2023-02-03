import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

const posts = await getCollection("posts");

export const get = () =>
	rss({
		title: "lewisakura",
		description: "Ramblings, mainly, but sometimes intelligence.",
		site: "https://lewisakura.moe",
		drafts: false,
		items: posts.map(({ data, slug }) => ({
			link: new URL(slug, "https://lewisakura.moe/posts").href,
			title: data.title,
			pubDate: data.createdAt,
			description: data.description,
		})),
	});
