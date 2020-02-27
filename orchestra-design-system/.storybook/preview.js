/** @jsx jsx */
import { jsx } from '@emotion/core'
// import React from 'react'
import { addDecorator } from '@storybook/react'
import { ThemeProvider } from 'emotion-theming'
import { Global } from '@emotion/core'
// import styled from '@emotion/styled'

import GlobalStyle from '../components/particles/global-style'
import theme from '../components/particles/theme'

const GlobalWrapper = (storFn) => (
  <ThemeProvider theme={theme}>
    <Global styles={GlobalStyle} />
    {storFn()}
  </ThemeProvider>
)

addDecorator(GlobalWrapper)
