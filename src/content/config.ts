import { defineCollection, z } from "astro:content";

export const collections = {
	posts: defineCollection({
		schema: z.object({
			title: z.string(),
			description: z.string(),
			tags: z.string().array(),
			createdAt: z.date(),
			modifiedAt: z.date().optional(),
		}),
	}),
};
