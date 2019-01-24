import React from "react";
import PropTypes from "prop-types";
import ArrowIcon from "../../assets/arrow.svg";
import {
	ActiveProjectStyles,
	ImagePlaceholder,
	Container,
	TechStack,
} from "../styles/ProjectStyles";

const ActiveProject = props => (
	<ActiveProjectStyles>
		<ImagePlaceholder />
		{console.log(props)}
		<Container>
			<h2>Receptboken</h2>
			<p>
				Fullstack webapp där användare kan ladda upp, spara, betygsätta recept.
				Användare kan också spara recept till inköpslistor som man enkelt kan ha
				med sig på affären när man ska handla.
			</p>
			<TechStack>
				Byggt med hjälp av: NextJS, Express, MongoDB, styled-components, Node,
				PassportJS
			</TechStack>
		</Container>
		<ArrowIcon />
	</ActiveProjectStyles>
);

export default ActiveProject;

ActiveProject.propTypes = {
	data: PropTypes.object,
};
