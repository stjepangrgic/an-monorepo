import React from 'react'
import PropTypes from 'prop-types'
import { Global } from '@emotion/core'
import { ThemeProvider } from 'emotion-theming'
// import Helmet from 'react-helmet'

// import useSiteMetadata from '../../hooks/useSiteMetadata'
import GlobalStyle from 'orchestra-design-system/components/particles/global-style'
import theme from 'orchestra-design-system/components/particles/theme'

console.log('theme: ', theme)

const GlobalLayout = ({ children }) => {
  // const { title, description, author } = useSiteMetadata();

  return (
    <>
      <ThemeProvider theme={theme}>
        <Global styles={GlobalStyle} />
        {/* <Helmet>
        <html lang="en"/>
        <title>{title}</title>
        <meta name="description" content={description}/>
        <meta name="author" content={author}/>
      </Helmet> */}
        {children}
      </ThemeProvider>
    </>
  )
}

GlobalLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default GlobalLayout
