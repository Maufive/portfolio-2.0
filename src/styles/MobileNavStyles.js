import styled from "styled-components";
import { animated } from "react-spring";
import MenuIcon from "../../assets/menu.svg";

export const MobileNavContainer = styled.div`
	display: none;
	> div {
		display: flex;
		align-items: center;
	}
	@media (max-width: ${props => props.theme.mobileBreakpoint}) {
		display: flex;
	}
`;

export const MobileNavBackground = styled(animated.div)`
	display: none;
	@media (max-width: ${props => props.theme.mobileBreakpoint}) {
		top: 0;
		left: 0;
		padding: 1rem 2rem;
		z-index: 5;
		position: absolute;
		border-right: 15px solid ${props => props.theme.darkGrey};
		height: 100vh;
		display: flex;
		flex-direction: column;
		background: linear-gradient(90.54deg, #fccf31 -74.03%, #f47139 106.02%);
		will-change: width;
		color: ${props => props.theme.darkGrey};

		> div {
			padding: 5rem 0;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: space-around;
			width: 100%;
			height: 100%;
		}
	}
`;

export const MenuItem = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	a {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		color: ${props => props.theme.darkGrey};
		font-size: 3rem;
		font-weight: 200;
		width: 100%;
		transition: all 300ms ease;
		&:visited {
			color: ${props => props.theme.darkGrey};
		}

		> svg {
			height: 50px;
			width: 50px;
			fill: ${props => props.theme.darkGrey};
			transition: all 300ms ease;
		}

		&:hover {
			color: ${props => props.theme.black};
			transform: scale(1.05);
			svg {
				fill: ${props => props.theme.black};
			}
		}
	}
`;

export const Menu = styled(MenuIcon)`
	height: 30px;
	width: 30px;
	fill: ${props => props.theme.orange};
	cursor: pointer;

	@media (max-width: 400px) {
		height: 23px;
		width: 25px;
	}
`;
