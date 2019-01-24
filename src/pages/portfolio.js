import React from "react";
import PropTypes from "prop-types";
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
		<ActiveProject />
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
};
