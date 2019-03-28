import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import SEO from '../components/seo'
import Layout from '../layouts/index'
import { Button } from '../styles/Button'
import { Headline, Jumbotron, ButtonContainer } from '../styles/IndexStyles'
import GmailIcon from '../../assets/gmail.svg'
import GithubIcon from '../../assets/github.svg'

const IndexPage = props => (
	<Layout location={props.location}>
		<SEO
			title="Hem"
			keywords={[
				'react',
				'webbutvecklare',
				'umeå',
				'utvecklare',
				'front-end',
				'webdesign',
			]}
		/>

		<Jumbotron>
			<Headline>
				<span>JAVASCRIPT</span>-UTVECKLARE.
			</Headline>
			<h2>Hej! 👋</h2>
			<p>
				Jag heter <span style={{ color: '#FE7E11' }}>Niklas Albinsson</span> och
				är självlärd JavaScript-utvecklare från Umeå med en brinnande motivation
				för Front-End.
			</p>
			<Link to="/about/">
				<Button>Läs mer om mig</Button>
			</Link>
		</Jumbotron>
		<ButtonContainer>
			<GithubIcon />
			<GmailIcon />
		</ButtonContainer>
	</Layout>
)

export default IndexPage

IndexPage.propTypes = {
	location: PropTypes.object,
}
