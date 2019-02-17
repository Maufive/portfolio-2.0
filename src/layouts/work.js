import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import styled from 'styled-components'
import {
	ActiveProjectStyles,
	Container,
	TechStack,
	ImageAndButtons,
} from '../styles/ProjectStyles'
import { Button, LinkButton } from '../styles/Button'

const StyledImage = styled(Img)`
	max-height: 325px;
	max-width: 500px;
	border-radius: 5px;

	@media (max-width: ${props => props.theme.mobileBreakpoint}) {
		max-width: 100%;
		max-height: 325px;
	}
`

class ActiveProject extends Component {
	render() {
		const { activeProject, activeProjectImage } = this.props
		return (
			<ActiveProjectStyles>
				<ImageAndButtons>
					<StyledImage fixed={activeProjectImage} />
					<div>
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
					</div>
				</ImageAndButtons>
				<Container>
					<h1>{activeProject.frontmatter.title}</h1>
					<p>{activeProject.rawMarkdownBody}</p>
					<TechStack>
						Byggt med hjälp av:{' '}
						{activeProject.frontmatter.tools.map(tool => (
							<span key={tool}>{tool}, </span>
						))}
						.
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
