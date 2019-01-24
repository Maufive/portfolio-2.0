module.exports = {
	siteMetadata: {
		title: "Niklas Albinsson Portfolio",
		description:
			"Min personliga portfolio för att visa upp tidigare projekt jag arbetat på, både professionella och hobbyprojekt.",
		author: "Niklas Albinsson",
	},
	plugins: [
		"gatsby-plugin-react-helmet",
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "images",
				path: `${__dirname}/src/images`,
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
				background_color: "#663399",
				theme_color: "#663399",
				display: "minimal-ui",
				icon: "src/images/gatsby-icon.png", // This path is relative to the root of the site.
			},
		},
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.app/offline
		// 'gatsby-plugin-offline',
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
			resolve: "gatsby-plugin-page-transitions",
			options: {
				transitionTime: 500,
			},
		},
	],
};
