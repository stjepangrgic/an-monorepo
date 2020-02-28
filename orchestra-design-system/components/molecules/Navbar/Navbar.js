import React from 'react'
// import StyledNavbar from './Image.styles'
import styled from '@emotion/styled'
import { css } from '@emotion/core'

import { Link, Logo, Button, Container } from '../../atoms'

const StyledNavbar = styled.nav`
  background-color: white;
  display: flex;
  align-items: center;
  height: 64px;
  .links,
  .actions {
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
    <Container>
      <StyledNavbar>
        <Link
          href="/"
          css={css`
            /* background-color: red; */
            padding: 0;
            margin-left: -1rem;
            &:hover {
              background: transparent;
              margin-left: -1rem;
              padding: 0 !important;
            }
          `}
        >
          <Logo size="small" />
        </Link>
        <div className="links">
          <Link href="#!" leftIcon="🔍">
            Search music
          </Link>
          <Link href="#!">Discover</Link>
          <Link href="#!" rightIcon="▼">
            Search music{' '}
          </Link>
        </div>

        <div className="actions">
          <Link href="#!">Login</Link>
          <Button>Register</Button>
        </div>
      </StyledNavbar>
    </Container>
  )
}

export default Navbar
