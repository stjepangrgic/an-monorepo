import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import { Link as DsLink } from 'orchestra-design-system/components/atoms'
// import StyledLink from 'orchestra-design-system/components/atoms/Link/Link.styles'

const Link = ({ children, ...props }) => {
  return (
    <DsLink as={GatsbyLink} {...props}>
      {children}
    </DsLink>
  )
}

export default Link
