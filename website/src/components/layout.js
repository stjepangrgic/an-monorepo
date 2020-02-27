import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

// import Header from './header'

const Layout = ({ children }) => {
  return (
    <>
      <nav>navbar</nav>
      <main>{children}</main>
      <footer>Footer</footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
