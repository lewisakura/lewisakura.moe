import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import cloudflare from "@astrojs/cloudflare";
import sitemap from "@astrojs/sitemap";
import mocha from "./mocha.json";
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
	],
	output: "server",
	adapter: cloudflare(),
});
