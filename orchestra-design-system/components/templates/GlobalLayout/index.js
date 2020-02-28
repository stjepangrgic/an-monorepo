import React from 'react'
// import PropTypes from 'prop-types'
import { Global } from '@emotion/core'
import { ThemeProvider } from 'emotion-theming'

import GlobalStyles from './Global.styles'
import theme from '../../particles/theme'

const GlobalLayout = ({ children }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Global styles={GlobalStyles} />
        {children}
      </ThemeProvider>
    </>
  )
}

// GlobalLayout.propTypes = {
//   children: PropTypes.node.isRequired,
// }

export default GlobalLayout