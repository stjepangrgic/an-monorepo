import React from 'react'
import styled from '@emotion/styled'
// import { graphql, useStaticQuery } from 'gatsby'

// import BackgroundImage from './BackgroundImage'

// const StyledBackgroundImage = styled(BackgroundImage)`
//   background-size: cover;
//   background-color: #ccf;
//   padding: 0rem 0;
// `

const StyledBackgroundImageDiv = styled.div`
  background-size: cover;
  padding: 5rem 0;
  background-color: #ccc;
  color: 000;
  /* height: 60vh; */
`

const PageHero = ({ children }) => {
  // const { image } = useStaticQuery(graphql`
  //   query {
  //     image: file(relativePath: { eq: "violin.jpg" }) {
  //       sharp: childImageSharp {
  //         fluid {
  //           ...GatsbyImageSharpFluid_withWebp
  //         }
  //       }
  //     }
  //   }
  // `)
  return (
    // <StyledBackgroundImage tag="section" image={image.sharp.fluid} >
    //   {children}
    // </StyledBackgroundImage>
    <StyledBackgroundImageDiv>{children}</StyledBackgroundImageDiv>
  )
}

export default PageHero
