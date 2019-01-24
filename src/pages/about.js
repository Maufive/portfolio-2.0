import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import PropTypes from "prop-types";
import styled from "styled-components";
import SEO from "../components/seo";
import Layout from "../layouts/index";
import {
	AboutWrapper,
	TidbitsContainer,
	ListContainer,
	Bio,
	ImageContainer,
} from "../styles/AboutStyles";

const StyledImage = styled(Img)`
	border-radius: 50%;
`;

const AboutPage = ({ data, location }) => (
	<Layout location={location}>
		<SEO
			title="Om mig"
			keywords={[
				"react",
				"webbutvecklare",
				"umeå",
				"utvecklare",
				"front-end",
				"webdesign",
				"Niklas",
				"Albinsson",
			]}
		/>
		<AboutWrapper>
			<Bio>
				<div>
					<h3>Om mig:</h3>
					<p>
						Jag heter Niklas Albinsson och är 26 år självlärd webbutvecklare
						från Umeå. Jag älskar att laga mat, lyssna på musik och resa.
					</p>
				</div>
				<TidbitsContainer>
					<div>
						<h3>Snabbfakta:</h3>
						<ListContainer>
							<ul style={{ color: "#E0E0E0" }}>
								<li>Android</li>
								<li>Vin</li>
								<li>Biggie</li>
								<li>Google</li>
								<li>Skaldjur</li>
							</ul>
							<ul>
								<li>
									<strike>iOS</strike>
								</li>
								<li>
									<strike>Öl</strike>
								</li>
								<li>
									<strike>2Pac</strike>
								</li>
								<li>
									<strike>Apple</strike>
								</li>
								<li>
									<strike>Kött</strike>
								</li>
							</ul>
						</ListContainer>
					</div>
					<div>
						<h3>Mina verktyg:</h3>
						<ListContainer>
							<ul style={{ color: "#E0E0E0" }}>
								<li>React</li>
								<li>ES6</li>
								<li>Express</li>
								<li>MongoDB</li>
								<li>REST</li>
							</ul>
							<ul>
								<li>GraphQL</li>
								<li>Apollo</li>
								<li>Figma</li>
								<li>CSS3</li>
								<li>HTML5</li>
							</ul>
						</ListContainer>
					</div>
				</TidbitsContainer>
			</Bio>
			<ImageContainer>
				<div>
					<StyledImage fixed={data.file.childImageSharp.fixed} />
				</div>
			</ImageContainer>
		</AboutWrapper>
	</Layout>
);

export default AboutPage;

export const query = graphql`
	query {
		file(relativePath: { eq: "suit.jpg" }) {
			childImageSharp {
				# Specify the image processing specifications right in the query.
				# Makes it trivial to update as your page's design changes.
				fixed(width: 300, height: 300) {
					...GatsbyImageSharpFixed
				}
			}
		}
	}
`;

AboutPage.propTypes = {
	data: PropTypes.object,
	location: PropTypes.object,
};
