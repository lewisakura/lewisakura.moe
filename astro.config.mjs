import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import { FontaineTransform } from "fontaine";

import mocha from "./mocha.json";

// https://astro.build/config
export default defineConfig({
	site: "https://lewisakura.moe",
	output: "static",
	prefetch: {
		prefetchAll: true,
	},
	markdown: {
		drafts: true,
		shikiConfig: {
			theme: mocha,
		},
	},
	vite: {
		plugins: [
			FontaineTransform.vite({
				fallbacks: [
					"-apple-system",
					"BlinkMacSystemFont",
					"Segoe UI",
					"Roboto",
					"Helvetica Neue",
					"Arial",
					"Noto Sans",
					"sans-serif",
				],
				resolvePath: (id) =>
					new URL(`./node_modules/@fontsource/${id}/files`, import.meta.url),
			}),
		],
	},
	integrations: [mdx({ drafts: true }), sitemap()],
});
