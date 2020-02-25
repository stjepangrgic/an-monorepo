import React from 'react'
import StyledImage from './Image.styles'

const Image = ({ src, alt, ...props }) => {
  return <StyledImage src={src} alt={alt} {...props} />
}

export default Image
