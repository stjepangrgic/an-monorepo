import React from 'react'
import styled from '@emotion/styled'

const StyledText = styled.p`
  /* background-color: tomato; */
  padding-bottom: 1rem;
`

const Text = ({ children, ...props }) => {
  return (
    <StyledText {...props}>
      {children}
    </StyledText>
  )
}

export default Text
