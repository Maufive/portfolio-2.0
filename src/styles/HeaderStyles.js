import styled from "styled-components";

export const HeaderStyles = styled.header`
	width: ${props => props.theme.maxWidth};
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
	align-items: center;

	@media (max-width: 1199px) {
		padding: 0 2rem;
		width: 100%;
	}

	@media (max-width: ${props => props.theme.mobileBreakpoint}) {
		width: 100%;
	}
`;

export const Logo = styled.div`
	> h1 {
		a {
			font-weight: 200;
			text-transform: uppercase;
			color: ${props => props.theme.grey};
			transition: all 300ms ease;
			span {
				margin-left: 1rem;
				font-weight: 700;
			}
			&:hover {
				color: ${props => props.theme.orange};
			}
		}
	}

	@media (max-width: 400px) {
		a {
			font-size: 2.5rem;
		}
	}
`;

export const NavStyles = styled.nav`
	display: flex;
	p {
		margin-left: 4rem;
		font-weight: 200;
		font-size: 2rem;
		margin-block-end: 0;
		margin-block-start: 0;
		transition: all 300ms ease;
		&:hover {
			color: ${props => props.theme.orange};
		}
	}

	@media (max-width: ${props => props.theme.mobileBreakpoint}) {
		display: none;
	}
`;
