import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import SEO from '../components/seo'
import Layout from '../layouts/index'
import ActiveProject from '../layouts/work'
import { ThumbnailContainer, ActiveThumbnail } from '../styles/ProjectStyles'

class PortfolioPage extends Component {
	constructor(props) {
		super(props)
		this.state = {
			data: this.props.data,
			activeProject: this.props.data.allMarkdownRemark.edges[1].node,
		}
	}

	handleActiveProject(project) {
		const edges = this.props.data.allMarkdownRemark.edges
		const index = edges.indexOf(project)
		this.setState({
			activeProject: edges[index].node,
		})
		window.scroll(0, 0)
	}

	render() {
		const { activeProject, data } = this.state
		const { location } = this.props
		return (
			<Layout location={location}>
				<SEO
					title="Portfolio"
					keywords={[
						'react',
						'portfolio',
						'webbutvecklare',
						'umeå',
						'utvecklare',
						'front-end',
						'webdesign',
						'niklas',
						'albinsson',
					]}
				/>

				<ThumbnailContainer>
					{activeProject &&
						data.allMarkdownRemark.edges.map(project => {
							if (
								project.node.frontmatter.title ===
								activeProject.frontmatter.title
							) {
								return (
									<ActiveThumbnail
										key={project.node.frontmatter.title}
										onClick={() => this.handleActiveProject(project)}
									>
										{project.node.frontmatter.title}
									</ActiveThumbnail>
								)
							} else {
								return (
									<div
										key={project.node.frontmatter.title}
										onClick={() => this.handleActiveProject(project)}
									>
										{project.node.frontmatter.title}
									</div>
								)
							}
						})}
				</ThumbnailContainer>
				<ActiveProject activeProject={activeProject} />
			</Layout>
		)
	}
}

export default PortfolioPage

PortfolioPage.propTypes = {
	location: PropTypes.object,
	data: PropTypes.object,
}

export const query = graphql`
	query {
		allMarkdownRemark {
			edges {
				node {
					frontmatter {
						title
						image
						date
						tools
						demo
						github
					}
					rawMarkdownBody
				}
			}
		}
	}
`
