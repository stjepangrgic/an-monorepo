import React from 'react'
import styled from '@emotion/styled'


const StyledContainer = styled.section`
  background-color: #eee;
  /* max-width: */
  width: 90vw;
  max-width: 1170px;
  margin: 0 auto
`

const Container = ({ children }) => {
  return (
    <StyledContainer>
      {children}
    </StyledContainer>
  )
}

export default Container
