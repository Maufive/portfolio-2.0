import React from 'react'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

const StyledImage = styled(Img)`
	max-height: 325px;
	max-width: 500px;
	border-radius: 5px;

	@media (max-width: ${props => props.theme.mobileBreakpoint}) {
		max-width: 100%;
		max-height: 325px;
	}
`

function renderImage(file) {
	console.log(file)
	return <StyledImage fixed={file.node.childImageSharp.resize} />
}

const MyImg = function(props) {
	return (
		<StaticQuery
			query={graphql`
				query {
					images: allFile(filter: { relativeDirectory: { eq: "images" } }) {
						edges {
							node {
								extension
								relativePath
								childImageSharp {
									resize(
										width: 500
										height: 325
										quality: 90
										cropFocus: CENTER
									) {
										src
										tracedSVG
										originalName
										width
										height
										aspectRatio
									}
								}
							}
						}
					}
				}
			`}
			render={({ images }) =>
				renderImage(
					images.edges.find(image => image.node.relativePath === props.src)
				)
			}
		/>
	)
}

export default MyImg

// https://spectrum.chat/gatsby-js/general/using-variables-in-a-staticquery~abee4d1d-6bc4-4202-afb2-38326d91bd05
