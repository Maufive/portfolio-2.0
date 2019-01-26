import React from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";
import styled from "styled-components";
import ArrowIcon from "../../assets/arrow.svg";
import {
	ActiveProjectStyles,
	ImagePlaceholder,
	Container,
	TechStack,
	ImageAndButtons,
} from "../styles/ProjectStyles";
import { Button } from "../styles/Button";

const StyledImage = styled(Img)`
	max-height: 325px;
	max-width: 375px;
`;

const ActiveProject = ({ data }) => (
	<ActiveProjectStyles>
		<ImageAndButtons>
			<StyledImage fixed={data.childImageSharp.resize} />
			<div>
				<Button>Live demo</Button>
				<Button secondary>Github</Button>
			</div>
		</ImageAndButtons>
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
