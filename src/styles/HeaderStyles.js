import styled from "styled-components";

export const HeaderStyles = styled.header`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;

	> div {
		flex: 1;
	}
`;

export const Logo = styled.div`
	> h1 {
		a {
			font-weight: 200;
			text-transform: uppercase;
			color: ${props => props.theme.grey};
			span {
				margin-left: 1rem;
				font-weight: 700;
			}
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
	}
`;
