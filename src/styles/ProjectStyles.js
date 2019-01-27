import styled from "styled-components";
import { fadeIn, grow } from "./Animations";

export const ActiveProjectStyles = styled.div`
	margin-top: 5rem;
	width: 100%;
	display: flex;
	svg {
		height: 150px;
		width: 75px;
		fill: ${props => props.theme.grey};
		margin: 10% auto;
		cursor: pointer;
		transition: all 200ms ease;
		&:hover {
			fill: ${props => props.theme.orange};
		}
	}
`;

export const Container = styled.div`
	width: 500px;
	display: flex;
	flex-direction: column;
	margin-left: 5rem;
	height: 100%;

	h1 {
		color: ${props => props.theme.orange};
		line-height: 1;
		font-weight: 400;
	}

	p {
		font-weight: 200;
		color: #bdbdbd;
		font-size: 2rem;
	}
`;

export const TechStack = styled.p`
	color: ${props => props.theme.grey} !important;
`;

export const ImageAndButtons = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;

	> div {
		display: flex;
		> button {
			margin-top: 3rem;
			margin-right: 3rem;
		}
	}
`;

export const ThumbnailContainer = styled.div`
	display: flex;
	justify-content: space-around;
	margin: 4rem auto;
	width: 50%;
	opacity: 0;
	animation: ${fadeIn} 500ms 500ms ease 1 normal forwards running;
`;

export const ActiveThumbnail = styled.div`
	height: 103px;
	outline: solid 2px ${props => props.theme.orange};
	/* border: 2px solid ${props => props.theme.orange}; */
	animation: ${grow} 400ms ease 1 normal forwards running;
`;
