import styled from "styled-components";

export const ActiveProjectStyles = styled.div`
	margin-top: 5rem;
	width: 100%;
	display: flex;
	align-items: center;
	svg {
		height: 150px;
		width: 75px;
		fill: ${props => props.theme.grey};
		margin: 0 auto;
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

	h2 {
    color: ${props => props.theme.orange};
    margin-block-end: 0;
    margin-block-start: 0;
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

export const SmallPlaceholder = styled.div`
	width: 100px;
	height: 100px;
	background: linear-gradient(135.69deg, #828282 -12%, #3e3e3e 108.36%);
`;
