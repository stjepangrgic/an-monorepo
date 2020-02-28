// No need to style this components
// and it's better to have it outside the components index import
// because it remove some sort of wiert bug with styled componets where you
// need to import it in a strange way:
// const StyledBackgroundImage = styled(props => <BackgroundImage {...props} />)`
//   background-size: cover;
//   height: 2000px;
// `
//https://github.com/styled-components/styled-components/issues/1449#issuecomment-420087359

import React from 'react';
// import { graphql, useStaticQuery } from 'gatsby';
import GatsbyBackgroundImage from 'gatsby-background-image';

const BackgroundImage = ({ tag, image, children, fadeIn, ...props }) => {
  return (
    <GatsbyBackgroundImage Tag={tag} fluid={image} fadeIn={fadeIn} {...props}>
      {children}
    </GatsbyBackgroundImage>
  )
}

export default BackgroundImage