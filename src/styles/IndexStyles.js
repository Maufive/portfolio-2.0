import styled from "styled-components";
import { fadeIn } from "./Animations";

export const Jumbotron = styled.div`
	margin-top: 10rem;
	display: flex;
	flex-direction: column;
	h2 {
		opacity: 0;
		animation: ${fadeIn} 400ms 400ms ease 1 normal forwards running;
	}
	p {
		font-size: 2.5rem;
		font-weight: 200;
		max-width: 60%;
		opacity: 0;
		animation: ${fadeIn} 400ms 400ms ease 1 normal forwards running;
	}
	button {
		opacity: 0;
		animation: ${fadeIn} 400ms 600ms ease 1 normal forwards running;
	}

	@media (max-width: ${props => props.theme.mobileBreakpoint}) {
		margin-top: 5rem;
		h1 {
			font-size: 5rem;
		}
		p {
			max-width: 100%;
			margin-block-start: 0;
		}
		h2 {
			margin: 2rem 0;
		}
	}

	@media (max-width: 400) {
		h1 {
			font-size: 3rem;
		}
	}
`;

export const Headline = styled.h1`
	font-size: 6rem;
	font-weight: 400;
	text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);
	opacity: 0;
	animation: ${fadeIn} 400ms 400ms ease 1 normal forwards running;
	span {
		color: ${props => props.theme.orange};
		font-weight: 700;
	}
`;

export const ButtonContainer = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 5rem;
	width: 200px;
	opacity: 0;
	animation: ${fadeIn} 400ms 600ms ease 1 normal forwards running;
	svg {
		height: 2.5rem;
		width: 2.5rem;
		fill: ${props => props.theme.lightGrey};
		transition: fill ${props => props.theme.animationTime} ease;
		&:hover {
			fill: ${props => props.theme.orange};
			cursor: pointer;
		}
	}

	@media (max-width: ${props => props.theme.mobileBreakpoint}) {
		width: 100%;
		margin: 5rem 0;
		justify-content: flex-start;

		svg {
			margin-right: 5rem;
		}
	}
`;
