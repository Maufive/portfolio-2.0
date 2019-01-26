import React, { Component } from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";
import SEO from "../components/seo";
import Layout from "../layouts/index";
import ActiveProject from "../layouts/work";
import { fadeIn } from "../styles/Animations";

const SmallPlaceholder = styled(Img)`
	max-width: 100px;
	max-height: 100px;
	cursor: pointer;
`;

const ThumbnailContainer = styled.div`
	display: flex;
	justify-content: space-around;
	margin: 4rem auto;
	width: 50%;
	opacity: 0;
	animation: ${fadeIn} 500ms 500ms ease 1 normal forwards running;
`;

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
				<ThumbnailContainer>
					{this.state.data.cropCenter.edges.map(project => {
						if (
							project.node.childImageSharp.resize ===
							this.state.activeProjectImage
						) {
							return (
								<div
									style={{
										border: "2px solid #FE7E11",
										height: "104px",
									}}
									key={project.node.childImageSharp.resize.originalName}
									onClick={() => this.handleActiveProject(project)}
								>
									<SmallPlaceholder
										fixed={project.node.childImageSharp.resize}
									/>
								</div>
							);
						} else {
							return (
								<div
									key={project.node.childImageSharp.resize.originalName}
									onClick={() => this.handleActiveProject(project)}
								>
									<SmallPlaceholder
										fixed={project.node.childImageSharp.resize}
									/>
								</div>
							);
						}
						// return (
						// 	<div
						// 		key={project.node.childImageSharp.resize.originalName}
						// 		onClick={() => this.handleActiveProject(project)}
						// 	>
						// 		<SmallPlaceholder fixed={project.node.childImageSharp.resize} />
						// 	</div>
						// );
					})}
				</ThumbnailContainer>
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
