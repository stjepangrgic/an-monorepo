import React from 'react'
// import PropTypes from 'prop-types'
import Footer from 'orchestra-design-system/components/molecules/Footer/Footer'

import GlobalLayout from 'orchestra-design-system/components/templates/GlobalLayout'
import { Navbar } from 'orchestra-design-system/components/molecules'

const PageLayout = ({ children }) => {
  return (
    <GlobalLayout>
      <Navbar />
      <main>{children}</main>
      <Footer>Footer</Footer>
    </GlobalLayout>
  )
}

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// }

export default PageLayout
