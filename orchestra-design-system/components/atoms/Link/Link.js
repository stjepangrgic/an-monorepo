import React from 'react'
import StyledLink from './Link.styles'

const Link = ({ href, children, leftIcon, rightIcon, variant, ...props }) => {
  return (
    <StyledLink href={href} variant={variant} {...props}>
      {leftIcon && <span className="left-icon">💩</span>}
      {children}
      {rightIcon && <span className="left-icon"> 💩</span>}
    </StyledLink>
  )
}

export default Link
