// import React from 'react'
// import PropTypes from 'prop-types'
// import { useStaticQuery, graphql } from 'gatsby'

// // import Header from './header'

// const Layout = ({ children }) => {
//   return (
//     <>
//       <nav>navbar</nav>
//       <main>{children}</main>
//       <footer>Footer</footer>
//     </>
//   )
// }

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// }

// export default Layout

import React from 'react'
import PropTypes from 'prop-types'

import GlobalLayout from './GlobalLayout'

const Layout = ({ children }) => {
  return (
    <GlobalLayout>
      {/* <Navbar /> */}
      <main>{children}</main>
    </GlobalLayout>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
