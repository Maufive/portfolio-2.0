import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import SEO from "../components/seo";
import Layout from "../layouts/index";
import { Button } from "../styles/Button";
import { Headline, Jumbotron, ButtonContainer } from "../styles/IndexStyles";
import InstagramIcon from "../../assets/instagram.svg";
import GmailIcon from "../../assets/gmail.svg";
import GithubIcon from "../../assets/github.svg";

const IndexPage = props => (
	<Layout location={props.location}>
		<SEO
			title="Home"
			keywords={[
				"react",
				"webbutvecklare",
				"umeå",
				"utvecklare",
				"front-end",
				"webdesign",
			]}
		/>

		<Jumbotron>
			<Headline>
				<span>JAVASCRIPT</span>-UTVECKLARE<span>.</span>
			</Headline>
			<p>
				<i>Hej!</i>
				<br />
				Jag heter <span style={{ color: "#FE7E11" }}>Niklas Albinsson</span> och
				är självlärd Javascript-utvecklare från Umeå med en brinnande motivation
				för <span style={{ fontWeight: "700" }}>Front-End.</span>
			</p>
			<Link to="/about/">
				<Button>Läs mer om mig</Button>
			</Link>
		</Jumbotron>
		<ButtonContainer>
			<InstagramIcon />
			<GithubIcon />
			<GmailIcon />
		</ButtonContainer>
	</Layout>
);

export default IndexPage;

IndexPage.propTypes = {
	location: PropTypes.object,
};
