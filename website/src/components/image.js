import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

import { StyledGatsbyImg } from 'orchestra-design-system/components/atoms/Image/Image.styles'

/*
 * Gatsby image specific css overides
 * I have no idea how I managed to make this work
 * It sort of uses DS's StyledImage styling but markup from Gatsby's Img
 * TODO Refactor to be a single commponent that acepts data
 */

export const StyledGatsbyImage = styled(StyledGatsbyImg).attrs({ as: Img })`
  /* 
  * No need to overwrite nothing atm
  * All styles are adressed in DS
  */
`

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <StyledGatsbyImage fluid={data.placeholderImage.childImageSharp.fluid} />
  )
}

export default Image
