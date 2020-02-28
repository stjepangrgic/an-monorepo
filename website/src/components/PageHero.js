import React from 'react'
import styled from '@emotion/styled';
import { graphql, useStaticQuery } from 'gatsby'

import BackgroundImage from './BackgroundImage'

const StyledBackgroundImage = styled(BackgroundImage)`
  background-size: cover;
  height: 60vh;
`

const PageHero = ({ children }) => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "violin.jpg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
  return (
    <StyledBackgroundImage tag="section" image={image.sharp.fluid}>
      {children}
    </StyledBackgroundImage>
  )
}

export default PageHero