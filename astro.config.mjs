import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import compress from "astro-compress";
import critters from "astro-critters";
import purgecss from "astro-purgecss";

import { FontaineTransform } from "fontaine";

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

				// iosevka is a monospaced font and isn't immediately visible in most cases, so it's fine to skip
				skipFontFaceGeneration: (font) => font === "Iosevka",
			}),
		],
	},
	integrations: [
		mdx({
			drafts: true,
		}),
		sitemap(),
		critters(),
		purgecss({
			fontFace: true,
			keyframes: true,
			content: ["./src/**/*.astro"],
		}),
		compress(),
	],
	output: "static",
});
