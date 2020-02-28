import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'

import { Container, Text } from '../../atoms'

const StyledFooter = styled.nav`
  background-color: #333;
  display: flex;
  align-items: center;
  /* height: 64px; */
`

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <Text
          css={css`
            color: #fff;
            padding: 20px 0;
            font-weight: bold;
          `}
        >
          AudioNetwork
        </Text>
      </Container>
    </StyledFooter>
  )
}

export default Footer
