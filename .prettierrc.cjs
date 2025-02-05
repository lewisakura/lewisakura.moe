module.exports = {
	singleQuote: false,
	useTabs: true,
	bracketSameLine: true,

	printWidth: 120,

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
