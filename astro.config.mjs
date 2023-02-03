import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import cloudflare from "@astrojs/cloudflare";
import sitemap from "@astrojs/sitemap";
import mocha from "./mocha.json";
import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
	site: "https://lewisakura.moe",
	markdown: {
		drafts: true,
		shikiConfig: {
			theme: mocha,
		},
	},
	integrations: [
		mdx({
			drafts: true,
		}),
		sitemap(),
		compress(),
	],
	output: "static",
});
