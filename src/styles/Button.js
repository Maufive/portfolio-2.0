import styled from "styled-components";

export const Button = styled.button`
	padding: 1rem 2.5rem;
	font-weight: 200;
	color: ${props => (props.secondary ? props.theme.grey : props.theme.orange)};
	border: 1px solid ${props => props.theme.grey};
	border-radius: 5px;
	background: transparent;
	width: fit-content;
	font-size: 2.5rem;
	transition: all ${props => props.theme.animationTime} ease;
	box-sizing: border-box;
	cursor: pointer;

	&:hover {
		color: ${props => props.theme.lightGrey};
		border: 1px solid ${props => props.theme.orange};
	}
`;
