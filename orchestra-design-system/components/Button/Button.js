import React from 'react';
import { node, func, string } from 'prop-types';
// import StyledButton, { StyledLinkButton } from './Button.styles'

const Button = ({ children, onClick, href, variant }) => {
  //   if (!href)
  //     return (
  //       <StyledButton onClick={onClick} variant={variant}>
  //         {children}
  //       </StyledButton>
  //     );

  return (
    // <StyledLinkButton href={href} variant="variant">
    //   {children}
    // </StyledLinkButton>
    <button onClick={onClick}>{children}</button>
  );
};

Button.propTypes = {
  children: node.isRequired,
  href: string,
  variant: string,
  onClick: func,
};

export default Button;
