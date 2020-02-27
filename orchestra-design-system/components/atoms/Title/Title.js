import React from 'react'
import StyledTitle from './Title.styles'

const Title = ({ as, children, h, ...props }) => {
  return (
    <StyledTitle as={as} h={h} {...props}>
      {children}
    </StyledTitle>
  )
}

export default Title
