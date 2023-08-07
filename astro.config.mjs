import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import compress from "@otterlord/astro-compress";
import purgecss from "astro-purgecss";

import mocha from "./mocha.json";

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
		//critters(),
		purgecss({
			fontFace: true,
			keyframes: true,
			content: ["./src/**/*.astro"],
		}),
		compress(),
	],
	output: "static",
});
