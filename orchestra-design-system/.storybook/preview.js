import React from 'react'
import { addDecorator } from '@storybook/react'
import { ThemeProvider } from 'styled-components'
import styled from 'styled-components'

import GlobalStyles from '../components/particles/global-style'
import theme from '../components/particles/theme'

const Wrap = styled.section`
  padding: 10px;
`

const GlobalWrapper = storFn => (
  <ThemeProvider theme={theme}>
    <Wrap>
      <GlobalStyles />
      {storFn()}
    </Wrap>
  </ThemeProvider>
)

addDecorator(GlobalWrapper)
