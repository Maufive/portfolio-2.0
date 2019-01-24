import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Logo, HeaderStyles, NavStyles } from "../styles/HeaderStyles";

const ActiveLink = styled.p`
	color: ${props => props.theme.orange};
	font-weight: 700 !important;
`;

const Nav = props => {
	const location = props.location;
	return (
		<NavStyles>
			{location === "/about/" ? (
				<Link to="/about/">
					<ActiveLink>Om mig</ActiveLink>
				</Link>
			) : (
				<Link to="/about/">
					<p>Om mig</p>
				</Link>
			)}
			<p>Portfolio</p>
			<p>CV</p>
			<p>Kontakt</p>
		</NavStyles>
	);
};

const Header = ({ location }) => (
	<HeaderStyles>
		<Logo>
			<h1>
				<Link to="/">
					NIKLAS
					<span>ALBINSSON</span>
				</Link>
			</h1>
		</Logo>
		<Nav location={location.pathname} />
	</HeaderStyles>
);

Header.propTypes = {
	location: PropTypes.object,
};

Nav.propTypes = {
	location: PropTypes.string,
};

export default Header;
