// import React from "react";
// import PropTypes from "prop-types";
// import { StaticQuery, graphql } from "gatsby";
// import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
// import Header from "./header";
// import Transition from "./transition";

// const theme = {
// 	orange: "#FE7E11",
// 	black: "#282828",
// 	darkGrey: "#3E3E3E",
// 	grey: "#828282",
// 	lightGrey: "#E0E0E0",
// 	maxWidth: "1200px",
// 	mobileBreakpoint: "768px",
// 	animationTime: "200ms",
// 	bs: "0 5px 24px 0 rgba(0, 0, 0, 0.06)",
// };

// const StyledPage = styled.div`
// 	color: ${props => props.theme.grey};
// 	min-height: 100vh;
// 	width: ${props => props.theme.maxWidth};
// 	margin: 0 auto;
// `;

// const GlobalStyle = createGlobalStyle`
//   @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,700');

//   html {
//     box-sizing: border-box;
//     font-size: 10px;
//     font-family: "Roboto", Arial, Helvetica, sans-serif, sans-serif;
// 		-webkit-font-smoothing: antialiased !important;
//     text-shadow:1px 1px 1px 1px rgba(0,0,0,0.005);
//     padding: 0;
//     margin: 0;
//     background: linear-gradient(90deg, #3d3d3d -27.01%, #131313 113.83%);
//   }

//   *, *:before, *:after {
//     box-sizing: inherit;

//   }
//   body {
//     padding: 0;
//     margin: 0;
//     font-size: 1.5rem;
// 		line-height: 2;
//   }

//   h1, h2, h3, h4 {
//     margin: 0;
//     margin-block-start: 0;
//     margin-block-end: 0;
//   }
//   a, a:visited {
//     color: ${props => props.theme.grey};
//     text-decoration: none;
//   }
// `;

// const Layout = ({ children, location }) => (
// 	<StaticQuery
// 		query={graphql`
// 			query SiteTitleQuery {
// 				site {
// 					siteMetadata {
// 						title
// 					}
// 				}
// 			}
// 		`}
// 		render={data => (
// 			<ThemeProvider theme={theme}>
// 				<StyledPage>
// 					<GlobalStyle />
// 					<Header siteTitle={data.site.siteMetadata.title} />
// 					<Transition location={location}>{children}</Transition>
// 				</StyledPage>
// 			</ThemeProvider>
// 		)}
// 	/>
// );

// Layout.propTypes = {
// 	children: PropTypes.node.isRequired,
// 	location: PropTypes.node,
// };

// export default Layout;
