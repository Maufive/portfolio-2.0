import styled from "styled-components";

export const AboutWrapper = styled.div`
	margin-top: 5rem;
	display: flex;
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
`;

export const TidbitsContainer = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
	margin-top: 5rem;
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
	}
`;

export const ListContainer = styled.div`
	display: flex;
	flex-direction: row;
`;

export const ImageContainer = styled.div`
	width: 50%;
	display: flex;
	justify-content: center;
	align-items: center;

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
`;
