import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
// import { graphql } from "gatsby";
import SEO from "../components/seo";
import Layout from "../layouts/index";
import ActiveProject from "../layouts/work";
import { SmallPlaceholder } from "../styles/ProjectStyles";

const styles = {
	display: "flex",
	justifyContent: "space-around",
	margin: "4rem auto",
	width: "50%",
};

const PortfolioPage = ({ data, location }) => (
	<Layout location={location}>
		<SEO
			title="Portfolio"
			keywords={[
				"react",
				"portfolio",
				"webbutvecklare",
				"umeå",
				"utvecklare",
				"front-end",
				"webdesign",
				"niklas",
				"albinsson",
			]}
		/>
		<ActiveProject data={data} />
		<div style={styles}>
			<SmallPlaceholder />
			<SmallPlaceholder />
			<SmallPlaceholder />
			<SmallPlaceholder />
			<SmallPlaceholder />
		</div>
	</Layout>
);

export default PortfolioPage;

PortfolioPage.propTypes = {
	location: PropTypes.object,
	data: PropTypes.object,
};

export const query = graphql`
	query {
		file(relativePath: { eq: "/images/receptboken.png" }) {
			childImageSharp {
				fixed(width: 375, height: 325) {
					...GatsbyImageSharpFixed
				}
			}
		}
	}
`;
