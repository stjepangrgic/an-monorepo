import React from 'react'
// import { Link } from "gatsby"
import Link from '../components/Link'

import PageLayout from '../components/PageLayout'
import SEO from '../components/seo'
import { Container } from 'orchestra-design-system/components/atoms'

const SecondPage = () => (
  <PageLayout>
    <SEO title="Page two" />
    <Container>
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      <Link to="/">Go back to the homepage</Link>
    </Container>
  </PageLayout>
)

export default SecondPage
