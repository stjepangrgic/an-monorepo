import React from 'react'
import StyledTitle from './Title.styles'

const Title = ({ h, children, ...props }) => {
  return (
    <StyledTitle h={h} {...props}>
      {children}
    </StyledTitle>
  )
}

export default Title
