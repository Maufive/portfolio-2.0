module.exports = {
	siteMetadata: {
		title: "Niklas Albinsson Portfolio",
		description:
			"Jag är en självlärd webbutvecklare och här visar jag upp mina tidigare projekt, både professionella och hobbyprojekt",
		author: "Niklas Albinsson",
	},
	plugins: [
		"gatsby-plugin-react-helmet",
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "work",
				path: `${__dirname}/static/work/`,
			},
		},
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "images",
				path: `${__dirname}/static/work/images/`,
			},
		},
		"gatsby-transformer-sharp",
		"gatsby-plugin-sharp",
		{
			resolve: "gatsby-plugin-manifest",
			options: {
				name: "gatsby-starter-default",
				short_name: "starter",
				start_url: "/",
				display: "minimal-ui",
				icon: "assets/orange.png", // This path is relative to the root of the site.
			},
		},
		"gatsby-plugin-netlify-cms",
		{
			resolve: "gatsby-plugin-styled-components",
		},
		{
			resolve: "gatsby-plugin-react-svg",
			options: {
				rule: {
					include: /assets/,
				},
			},
		},
		{
			resolve: "gatsby-transformer-remark",
			options: {
				plugins: [
					{
						resolve: "gatsby-remark-images",
						options: {
							// It's important to specify the maxWidth (in pixels) of
							// the content container as this plugin uses this as the
							// base for generating different widths of each image.
							maxWidth: 575,
							backgroundColor: "#828282",
						},
					},
				],
			},
		},
	],
};
