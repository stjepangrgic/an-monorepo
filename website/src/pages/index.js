import React from 'react'
// import { Link } from 'gatsby'
import { css } from '@emotion/core'
// import { Link as GatsbyLink } from "gatsby"
import Link from '../components/Link'

// import { Button } from 'orchestra-design-system/components/atoms'

import PageLayout from '../components/PageLayout'
import {
  Title,
  Container,
  Text,
  Button,
} from 'orchestra-design-system/components/atoms'
import Hero from '../components/PageHero'
// import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = () => {
  const musicSolutions = [
    {
      title: 'Tv Programing',
      text: 'For production companies and broadcasters',
      url: '/page-2',
    },
    {
      title: 'TV ADVERTISING',
      text: 'For ad agencies and in-house brand teams',
      url: '/page-2',
    },
    {
      title: 'DIGITAL ENTERTAINMENT',
      text: 'For online creators, MCNs and publishers',
      url: '/page-2',
    },
    {
      title: 'DIGITAL BRANDED CONTENT',
      text: 'For agencies, brands and production companies',
      url: '/mdx-page',
    },
  ]

  return (
    <PageLayout>
      <SEO title="Home" />

      <Hero>
        <Container>
          <Title
            h="1"
            css={css`
              color: #fff;
            `}
          >
            Hear More
          </Title>
          <Text
            css={css`
              color: #fff;
            `}
          >
            With over 175,000 tracks - discover the music to tell your story
          </Text>
          <Button>Create Account</Button>
        </Container>
      </Hero>

      <Container>
        <Title h="2">A Music Solution For All Creators</Title>
        <Text>
          Whatever your project and wherever you're from, we have a wealth of
          music and tailored licences just to suit you
        </Text>

        {musicSolutions.map((solution, index) => {
          return (
            <div className="music-solution" key={index}>
              <Title>{solution.title}</Title>
              <Text>{solution.text}</Text>
              {/* <Link>Learn more</Link> */}
              <Link to={solution.url}>Learn more</Link>
            </div>
          )
        })}
      </Container>
    </PageLayout>
  )
}

export default IndexPage
