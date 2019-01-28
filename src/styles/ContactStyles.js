import styled from "styled-components";

export const ContactStyles = styled.div`
	margin: 5rem auto;
	width: 800px;
	display: flex;
	align-items: center;
	flex-direction: column;
	h1 {
		color: ${props => props.theme.orange};
	}
	ul {
		padding: 0;
	}
	li {
		list-style: none;
		margin: 3rem 0;

		a {
			display: flex;
			align-items: center;
			font-size: 2rem;
			color: ${props => props.theme.lightGrey};
			font-weight: 200;
			transition: all 300ms ease;

			svg {
				fill: ${props => props.theme.grey};
				height: 3rem;
				width: 3rem;
				margin-right: 5rem;
				transition: all 300ms ease;
			}

			&:hover {
				color: ${props => props.theme.orange};
				svg {
					fill: ${props => props.theme.orange};
				}
			}
		}
	}

	@media (max-width: ${props => props.theme.mobileBreakpoint}) {
		width: 100%;

		> ul > li > a {
			flex-direction: column;
			justify-content: center;
			margin-bottom: 5rem;
			> svg {
				margin-right: 0;
				margin-bottom: 1rem;
			}
		}
	}
`;
