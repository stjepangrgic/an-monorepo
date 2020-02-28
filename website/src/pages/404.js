import React from 'react'

import PageLayout from '../components/PageLayout'
import SEO from '../components/seo'
import { Container } from 'orchestra-design-system/components/atoms'

const NotFoundPage = () => (
  <PageLayout>
    <SEO title="404: Not found" />
    <Container>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Container>
  </PageLayout>
)

export default NotFoundPage
