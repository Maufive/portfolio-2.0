import styled from "styled-components";
import { fadeIn } from "./Animations";

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

	@media (max-width: ${props => props.theme.mobileBreakpoint}) {
		flex-direction: column;
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

	@media (max-width: ${props => props.theme.mobileBreakpoint}) {
		width: 100%;
		margin: 0;
	}
`;

export const ImageAndButtons = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;

	> div {
		display: flex;
		> button {
			margin-top: 5rem;
			margin-right: 3rem;
		}
	}

	@media (max-width: ${props => props.theme.mobileBreakpoint}) {
		align-items: center;
		margin-bottom: 5rem;
	}
`;

export const ThumbnailContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	margin: 5rem auto;
	width: 50%;
	opacity: 0;

	> div {
		cursor: pointer;
		transition: all 300ms ease;

		&:hover {
			transform: translateY(-3px);
		}
	}
	@media (max-width: ${props => props.theme.mobileBreakpoint}) {
		width: 100%;
		flex-wrap: wrap;
	}
`;

export const ActiveThumbnail = styled.div`
	border-bottom: 2px solid ${props => props.theme.orange};
	color: ${props => props.theme.lightGrey};
	font-weight: 700;
`;

export const TechStack = styled.div`
	display: flex;
	flex-wrap: wrap;
	width: 100%;
`;

export const Tag = styled.span`
	padding: 0.5rem 1.5rem;
	font-size: 1.5rem;
	background: ${props => props.theme.black};
	color: ${props => props.theme.orange};
	border-radius: 3px;
	margin-right: 2rem;
	margin-bottom: 2rem;
	box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.3);
`;
