import styled from "styled-components";

export const Jumbotron = styled.div`
	margin-top: 10rem;
	display: flex;
	flex-direction: column;

	p {
		font-size: 2.5rem;
		font-weight: 200;
		max-width: 60%;
	}
`;

export const Headline = styled.h1`
	font-size: 6rem;
	font-weight: 400;
	text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);
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
`;
