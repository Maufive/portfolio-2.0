import styled from "styled-components";

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

export const ImagePlaceholder = styled.div`
	background: linear-gradient(135.69deg, #828282 -12%, #3e3e3e 108.36%);
	height: 325px;
	width: 375px;
`;

export const Container = styled.div`
	width: 500px;
	display: flex;
	flex-direction: column;
	margin-left: 5rem;
	height: 100%;

	h2 {
    color: ${props => props.theme.orange};
		line-height: 1;
	}

	p {
		font-weight: 200;
    /* color: ${props => props.theme.grey}; */
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
		justify-content: space-around;
		> button {
			margin-top: 5rem;
		}
	}
`;
