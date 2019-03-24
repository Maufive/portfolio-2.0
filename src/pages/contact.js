import React from 'react'
import SEO from '../components/seo'
import PropTypes from 'prop-types'
import Layout from '../layouts/index'
import { Spring } from 'react-spring'
import GmailIcon from '../../assets/gmail.svg'
import GithubIcon from '../../assets/github.svg'
import { ContactStyles } from '../styles/ContactStyles'

const ContactPage = props => (
	<Layout location={props.location}>
		<SEO
			title="Kontakt"
			keywords={[
				'kontakt',
				'webbutvecklare',
				'webdesign',
				'umeå',
				'webbdesigner',
				'niklas',
				'albinsson',
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
					</ul>
				</ContactStyles>
			)}
		</Spring>
	</Layout>
)

export default ContactPage

ContactPage.propTypes = {
	location: PropTypes.object,
}
