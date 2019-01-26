import React, { Component } from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";
import SEO from "../components/seo";
import Layout from "../layouts/index";
import ActiveProject from "../layouts/work";

const SmallPlaceholder = styled(Img)`
	max-width: 100px;
	max-height: 100px;
	cursor: pointer;
`;

const styles = {
	display: "flex",
	justifyContent: "space-around",
	margin: "4rem auto",
	width: "50%",
};

class PortfolioPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: this.props.data,
			activeProject: this.props.data.allMarkdownRemark.edges[1].node,
			activeProjectImage: this.props.data.cropCenter.edges[1].node
				.childImageSharp.resize,
		};
	}

	handleActiveProject(project) {
		const index = this.props.data.cropCenter.edges.indexOf(project);
		this.setState({
			activeProject: this.props.data.allMarkdownRemark.edges[index].node,
			activeProjectImage: this.props.data.cropCenter.edges[index].node
				.childImageSharp.resize,
		});
	}

	render() {
		const { location } = this.props;
		return (
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
				<ActiveProject
					activeProject={this.state.activeProject}
					activeProjectImage={this.state.activeProjectImage}
				/>
				<div style={styles}>
					{this.state.data.cropCenter.edges.map(project => {
						return (
							<div
								key={project.node.childImageSharp.resize.originalName}
								onClick={() => this.handleActiveProject(project)}
							>
								<SmallPlaceholder fixed={project.node.childImageSharp.resize} />
							</div>
						);
					})}
				</div>
			</Layout>
		);
	}
}

export default PortfolioPage;

PortfolioPage.propTypes = {
	location: PropTypes.object,
	data: PropTypes.object,
};

export const query = graphql`
	query {
		allMarkdownRemark {
			edges {
				node {
					frontmatter {
						title
						date
						tools
					}
					rawMarkdownBody
				}
			}
		}
		cropCenter: allFile(filter: { relativeDirectory: { eq: "images" } }) {
			edges {
				node {
					childImageSharp {
						resize(width: 575, height: 525, cropFocus: CENTER) {
							src
							tracedSVG
							originalName
							width
							height
							aspectRatio
						}
					}
				}
			}
		}
	}
`;
