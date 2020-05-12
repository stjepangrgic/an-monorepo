import React from 'react'
import styled from '@emotion/styled'

const StyledWrap = styled.div`
  width: 90vw;
  max-width: 1170px;
  margin: 0 auto;
`

const StyledContainer = styled.section`
  background-color: #ece;
  margin: 0 auto;
`

const Container = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>
}

const StyledContent = styled.div``

const Content = ({ children }) => {
  return (
    <StyledContent>
      <Container>{children}</Container>
    </StyledContent>
  )
}

const StyledPageHeader = styled.section`
  background-color: #eee;
`

const PageHeader = ({ title, description }) => {
  return (
    <StyledPageHeader>
      <StyledWrap>
        <h1>{title}</h1>
        <p>{description}</p>
      </StyledWrap>
    </StyledPageHeader>
  )
}

const StyledBlock = styled.section`
  background-color: #caa;
`

const Block = ({ title, description, children }) => {
  return (
    <StyledBlock>
      <StyledWrap>
        <h2>{title}</h2>
        <p>{description}</p>
      </StyledWrap>
      {children}
    </StyledBlock>
  )
}

export { Container, PageHeader, Content, Block, StyledWrap }
