import React from "react";
import PropTypes from "prop-types";
// import { graphql } from "gatsby";
import SEO from "../components/seo";
import Layout from "../layouts/index";

const PortfolioPage = props => (
	<Layout location={props.location}>
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
		Hello Its A Me
	</Layout>
);

export default PortfolioPage;

PortfolioPage.propTypes = {
	location: PropTypes.object,
};
