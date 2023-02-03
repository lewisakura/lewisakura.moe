module.exports = {
	singleQuote: false,
	useTabs: true,
	bracketSameLine: true,

	plugins: [require.resolve("prettier-plugin-astro")],
	overrides: [
		{
			files: "*.astro",
			options: {
				parser: "astro",
			},
		},
	],
};
