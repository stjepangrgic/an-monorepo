import React from 'react'
// import StyledNavbar from './Image.styles'
import styled from '@emotion/styled'

import { Link, Logo, Button } from '../../atoms'

const StyledNavbar = styled.nav`
  background-color: white;
  padding: 10px;
  display: flex;
  align-items: center;
  .links, .actions {
    > * {
      margin-left: 1rem;
    }
  }
  .actions {
    margin-left: auto;
  }
`

const Navbar = () => {
  return (
    <StyledNavbar>
      <Link href="#!">
        <Logo size="small" />
      </Link>
      <div className="links">
        <Link href="#!" leftIcon='🔍'>Search music</Link>
        <Link href="#!">Discover</Link>
        <Link href="#!" rightIcon="▼">Search music </Link>
      </div>

      <div className="actions">
        <Link href="#!">Login</Link>
        <Button >Register</Button>
      </div>

    </StyledNavbar>
  )
}

export default Navbar
