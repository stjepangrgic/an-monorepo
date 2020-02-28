import React from 'react'
// import PropTypes from 'prop-types'

import GlobalLayout from 'orchestra-design-system/components/templates/GlobalLayout'
import { Navbar } from 'orchestra-design-system/components/molecules'

const PageLayout = ({ children }) => {
  return (
    <GlobalLayout>
      <Navbar />
      <main>{children}</main>
    </GlobalLayout>
  )
}

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// }

export default PageLayout
