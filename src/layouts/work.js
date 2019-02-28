import React, { Component } from 'react'
import PropTypes from 'prop-types'
import MyImg from '../components/image'
import {
	ActiveProjectStyles,
	Container,
	TechStack,
	Tag,
	ImageAndButtons,
} from '../styles/ProjectStyles'
import { LinkButton, LinkContainer } from '../styles/Button'

class ActiveProject extends Component {
	render() {
		const { activeProject } = this.props
		const imageUrl = activeProject.frontmatter.image.replace('/', '')
		return (
			<ActiveProjectStyles>
				<ImageAndButtons>
					<MyImg src={imageUrl} />
					<LinkContainer>
						<LinkButton href={activeProject.frontmatter.demo} target="_blank">
							Live demo
						</LinkButton>
						<LinkButton
							href={activeProject.frontmatter.github}
							target="_blank"
							secondary
						>
							Github
						</LinkButton>
					</LinkContainer>
				</ImageAndButtons>
				<Container>
					<h1>{activeProject.frontmatter.title}</h1>
					<p>{activeProject.rawMarkdownBody}</p>
					<TechStack>
						{activeProject.frontmatter.tools.map(tool => (
							<Tag key={tool}>{tool}</Tag>
						))}
					</TechStack>
				</Container>
			</ActiveProjectStyles>
		)
	}
}
export default ActiveProject

ActiveProject.propTypes = {
	activeProject: PropTypes.object,
	activeProjectImage: PropTypes.object,
}
