import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import MobileNav from './MobileNav'
import { Logo, HeaderStyles, NavStyles } from '../styles/HeaderStyles'

const ActiveLink = styled.p`
	color: ${props => props.theme.orange};
	border-bottom: 1px solid ${props => props.theme.orange};
`

const Nav = ({ location }) => {
	return (
		<NavStyles>
			{location === '/about/' ? (
				<Link to="/about/">
					<ActiveLink>Om mig</ActiveLink>
				</Link>
			) : (
				<Link to="/about/">
					<p>Om mig</p>
				</Link>
			)}
			{location === '/portfolio/' ? (
				<Link to="/portfolio/">
					<ActiveLink>Portfolio</ActiveLink>
				</Link>
			) : (
				<Link to="/portfolio/">
					<p>Portfolio</p>
				</Link>
			)}
			{location === '/contact/' ? (
				<Link to="/contact/">
					<ActiveLink>Kontakt</ActiveLink>
				</Link>
			) : (
				<Link to="/contact/">
					<p>Kontakt</p>
				</Link>
			)}
		</NavStyles>
	)
}

const Header = ({ location }) => (
	<HeaderStyles>
		<Logo>
			<Link to="/">Niklas Albinsson</Link>
		</Logo>
		<MobileNav />
		<Nav location={location ? location.pathname : '/'} />
	</HeaderStyles>
)

Header.propTypes = {
	location: PropTypes.object,
}

Nav.propTypes = {
	location: PropTypes.string,
}

export default Header
