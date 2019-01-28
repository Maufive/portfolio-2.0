import styled from "styled-components";

export const AboutWrapper = styled.div`
	margin-top: 5rem;
	display: flex;
	@media (max-width: ${props => props.theme.mobileBreakpoint}) {
		flex-direction: column;
	}
`;

export const Bio = styled.div`
	display: flex;
	flex-direction: column;
	width: 50%;
	font-size: 2rem;

	p {
		color: ${props => props.theme.lightGrey};
		font-weight: 200;
	}

	@media (max-width: ${props => props.theme.mobileBreakpoint}) {
		order: 2;
		width: 100%;
		margin-top: 5rem;
	}
`;

export const TidbitsContainer = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
	margin: 5rem 0;
	> div {
		display: flex;
		flex-direction: column;
		width: 50%;
		ul {
			list-style: none;
			margin: 0;
			margin-right: 5rem;
			padding: 0;
			font-weight: 200;
		}

		@media (max-width: ${props => props.theme.mobileBreakpoint}) {
			ul {
				margin-top: 5rem;
			}
		}
	}

	@media (max-width: ${props => props.theme.mobileBreakpoint}) {
		order: 3;
		flex-direction: column;

		> div {
			align-items: center;
			width: 100%;
			margin-bottom: 5rem;
		}
	}
`;

export const ListContainer = styled.div`
	display: flex;
	flex-direction: row;

	@media (max-width: ${props => props.theme.mobileBreakpoint}) {
		justify-content: space-evenly;
		width: 100%;
	}
`;

export const ImageContainer = styled.div`
	width: 50%;
	display: flex;
	justify-content: center;

	> div {
		height: 315px;
		width: 315px;
		border-radius: 50%;
		background: linear-gradient(90.54deg, #fccf31 -74.03%, #f47139 106.02%);
		display: flex;
		justify-content: center;
		align-items: center;
		/* > div > picture > img {
			border-radius: 50%;
		} */
	}

	@media (max-width: ${props => props.theme.mobileBreakpoint}) {
		order: 1;
		width: 100%;
	}
`;
