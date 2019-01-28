import React, { Component } from 'react'
import { Link } from 'gatsby'
import { Spring } from 'react-spring'
import CardIcon from '../../assets/card.svg'
import HomeIcon from '../../assets/home.svg'
import PortfolioIcon from '../../assets/portfolio.svg'
import UserIcon from '../../assets/user.svg'
import {
	MobileNavContainer,
	MobileNavBackground,
	MenuItem,
	Menu,
} from '../styles/MobileNavStyles.js'

class MobileNav extends Component {
	constructor() {
		super()
		this.state = {
			toggle: false,
		}
	}

	toggleMenu() {
		this.setState(state => ({ toggle: !state.toggle }))
	}

	render() {
		const toggle = this.state.toggle
		const widthStart = toggle ? '0vw' : '80vw'
		const widthEnd = toggle ? '80vw' : '0vw'
		return (
			<MobileNavContainer>
				<div>
					<Menu onClick={() => this.toggleMenu()} />
				</div>

				{toggle && (
					<Spring
						from={{
							width: widthStart,
							opacity: toggle ? 0 : 1,
						}}
						to={{
							width: widthEnd,
							opacity: toggle ? 1 : 0,
						}}
						delay={toggle ? 0 : 500}
						native
					>
						{props => (
							<MobileNavBackground style={props}>
								<div>
									<Spring
										from={{
											marginRight: toggle ? 100 : 0,
											opacity: toggle ? 0 : 1,
										}}
										to={{
											marginRight: toggle ? 0 : 100,
											opacity: toggle ? 1 : 0,
										}}
										delay={toggle ? 200 : 400}
									>
										{props => (
											<MenuItem style={props}>
												<Link to="/">
													<HomeIcon /> Hem
												</Link>
											</MenuItem>
										)}
									</Spring>
									<Spring
										from={{
											marginRight: toggle ? 100 : 0,
											opacity: toggle ? 0 : 1,
										}}
										to={{
											marginRight: toggle ? 0 : 100,
											opacity: toggle ? 1 : 0,
										}}
										delay={toggle ? 400 : 300}
									>
										{props => (
											<MenuItem style={props}>
												<Link to="/about/">
													<UserIcon /> Om mig
												</Link>
											</MenuItem>
										)}
									</Spring>
									<Spring
										from={{
											marginRight: toggle ? 100 : 0,
											opacity: toggle ? 0 : 1,
										}}
										to={{
											marginRight: toggle ? 0 : 100,
											opacity: toggle ? 1 : 0,
										}}
										delay={toggle ? 600 : 200}
									>
										{props => (
											<MenuItem style={props}>
												<Link to="/portfolio/">
													<PortfolioIcon /> Portfolio
												</Link>
											</MenuItem>
										)}
									</Spring>
									<Spring
										from={{
											marginRight: toggle ? 100 : 0,
											opacity: toggle ? 0 : 1,
										}}
										to={{
											marginRight: toggle ? 0 : 100,
											opacity: toggle ? 1 : 0,
										}}
										delay={toggle ? 800 : 0}
									>
										{props => (
											<MenuItem style={props}>
												<Link to="/contact/">
													<CardIcon /> Kontakt
												</Link>
											</MenuItem>
										)}
									</Spring>
								</div>
							</MobileNavBackground>
						)}
					</Spring>
				)}
			</MobileNavContainer>
		)
	}
}

export default MobileNav
