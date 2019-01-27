import React from "react";
import SEO from "../components/seo";
import PropTypes from "prop-types";
import styled from "styled-components";
import Layout from "../layouts/index";
import { Spring } from "react-spring";
import InstagramIcon from "../../assets/instagram.svg";
import GmailIcon from "../../assets/gmail.svg";
import GithubIcon from "../../assets/github.svg";

const ContactStyles = styled.div`
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
			}

			&:hover {
				color: ${props => props.theme.orange};
			}
		}
	}
`;

const ContactPage = props => (
	<Layout location={props.location}>
		<SEO
			title="Kontakt"
			keywords={[
				"kontakt",
				"webbutvecklare",
				"webdesign",
				"umeå",
				"webbdesigner",
				"niklas",
				"albinsson",
			]}
		/>
		<Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
			{props => (
				<ContactStyles style={props}>
					<h1>Kontakta mig</h1>
					<ul>
						<li>
							<a
								href="mailto:albinssonniklas@gmail.com"
								target="_blank"
								rel="noopener noreferrer"
							>
								<GmailIcon />
								albinssonniklas@gmail.com
							</a>
						</li>
						<li>
							<a
								href="https://github.com/Maufive"
								target="_blank"
								rel="noopener noreferrer"
							>
								<GithubIcon />
								https://github.com/Maufive
							</a>
						</li>
						<li>
							<a
								href="https://instagram.com/niklasalbinsson"
								target="_blank"
								rel="noopener noreferrer"
							>
								<InstagramIcon /> https://instagram.com/niklasalbinsson
							</a>
						</li>
					</ul>
				</ContactStyles>
			)}
		</Spring>
	</Layout>
);

export default ContactPage;

ContactPage.propTypes = {
	location: PropTypes.object,
};
