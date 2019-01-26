import React from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";
import styled from "styled-components";
import ArrowIcon from "../../assets/arrow.svg";
import {
	ActiveProjectStyles,
	Container,
	TechStack,
	ImageAndButtons,
} from "../styles/ProjectStyles";
import { Button } from "../styles/Button";

const StyledImage = styled(Img)`
	max-height: 325px;
	max-width: 375px;
`;

const ActiveProject = ({ activeProject, activeProjectImage }) => (
	<ActiveProjectStyles>
		<ImageAndButtons>
			<StyledImage fixed={activeProjectImage} />
			<div>
				<Button>Live demo</Button>
				<Button secondary>Github</Button>
			</div>
		</ImageAndButtons>
		<Container>
			<h2>{activeProject.frontmatter.title}</h2>
			<p>{activeProject.rawMarkdownBody}</p>
			<TechStack>
				Byggt med hjälp av:{" "}
				{activeProject.frontmatter.tools.map(tool => (
					<span key={tool}>{tool}, </span>
				))}
				.
			</TechStack>
		</Container>
		<ArrowIcon />
	</ActiveProjectStyles>
);

export default ActiveProject;

ActiveProject.propTypes = {
	activeProject: PropTypes.object,
	activeProjectImage: PropTypes.object,
};
