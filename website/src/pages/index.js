import React from 'react'
// import { Link } from 'gatsby'

// import { Button } from 'orchestra-design-system/components/atoms'

import PageLayout from '../components/PageLayout'
import { Title, Container, Text, Button } from 'orchestra-design-system/components/atoms'
// import Image from '../components/image'
// import SEO from '../components/seo'

const IndexPage = () => (
  <PageLayout>
    {/* <SEO title="Home" /> */}
    <Container>
      <Title h="1">Hear More</Title>
      <Text>With over 175,000 tracks - discover the music to tell your story</Text>
      <Button>Create Account</Button>
    </Container>
  </PageLayout>
)

export default IndexPage
