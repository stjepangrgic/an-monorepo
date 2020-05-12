import React from 'react'
// import { css } from '@emotion/core'
// import Link from '../components/Link'
import {
  // Container,
  PageHeader,
  Content,
  Block,
  StyledWrap,
} from './pricing.styles'

import PageLayout from '../components/PageLayout'
// import {
//   Title,
//   // Container,
//   Text,
// } from 'orchestra-design-system/components/atoms'

// import PageHero from '../components/PageHero'
// import SEO from '../components/seo'

const content = {
  pageTitle: 'Music Lincesing',
  pageDescription:
    'Audio Network has the answers to all your music licensing needs. From tailored subscription offers – including licensing a single track – to music consultancy, we make the process straightforward. Our music covers every conceivable genre, mood or emotion and we have a huge range of search functions, meaning you can find your ideal track fast.',
  subscriptions: {
    sectionTitle: 'Subscriptions',
    sectionDesc:
      'We have a range of subscription options, tailored to your projects.',
    licenses: {
      Corporate: [
        {
          title: 'Corporate subscription',
          price: '',
          options: {
            accountManagerSupport: true,
            fullCatalogueAccess: true,
            corporateCharityNonProfit: true,
            socialMediaPromotion: false,
            onlineAdvertisements: false,
            onlineEditorial: true,
            tvProgrammingPromos: false,
          },
          moreInfo:
            'Content designed for internal use or organic posting on the organization’s own website or social media. No paid media allowed.',
        },
      ],
      Advertising: [
        {
          title: 'The Essential Edit',
          price: '83',
          options: {
            accountManagerSupport: false,
            fullCatalogueAccess: false,
            corporateCharityNonProfit: true,
            socialMediaPromotion: true,
            onlineAdvertisements: true,
            onlineEditorial: false,
            tvProgrammingPromos: false,
          },
          moreInfo:
            'A fully self-serve subscription covering online ads with unlimited media spend.',
        },
        {
          title: 'Digital advertising subscription',
          price: '',
          options: {
            accountManagerSupport: true,
            fullCatalogueAccess: true,
            corporateCharityNonProfit: true,
            socialMediaPromotion: true,
            onlineAdvertisements: true,
            onlineEditorial: true,
            tvProgrammingPromos: false,
          },
          moreInfo:
            'A full-featured subscription covering online ads and branded content with unlimited media spend.',
        },
      ],
      Tv: [
        {
          title: 'Custom subscription',
          price: '',
          options: {
            accountManagerSupport: true,
            fullCatalogueAccess: true,
            corporateCharityNonProfit: true,
            socialMediaPromotion: false,
            onlineAdvertisements: false,
            onlineEditorial: true,
            tvProgrammingPromos: true,
          },
          moreInfo:
            'A full-featured custom subscription designed for tv producers and broadcasters',
        },
      ],
    },
  },
  singleTrack: {
    sectionTitle: 'Single track',
    sectionDesc: 'Just need a single track? Browse the track plans below.',
    licenses: {
      Creators: [
        {
          title: 'Creator/Creator+',
          price: '£6.99 / 19.99	',
          options: {
            accountManagerSupport: false,
            fullCatalogueAccess: true,
            individualStudent: true,
            corporateCharityNonProfit: false,
            socialMediaPromotion: false,
            onlineAdvertisements: false,
            advertisementsForTV: false,
            onlineEditorial: false,
            tvProgrammingPromos: false,
          },
          moreInfo:
            'For video sharing sites and social media. Excludes any sponsored content. Creator+ allows monetisation',
        },
      ],
      Corporate: [
        {
          title: 'Professional',
          price: '£69',
          options: {
            accountManagerSupport: false,
            fullCatalogueAccess: true,
            individualStudent: false,
            corporateCharityNonProfit: true,
            socialMediaPromotion: true,
            onlineAdvertisements: false,
            advertisementsForTV: false,
            onlineEditorial: true,
            tvProgrammingPromos: false,
          },
          moreInfo:
            'Content designed for internal use or organic posting on the organization’s own website or social media. Media spend capped at £2k per video',
        },
      ],
      Advertising: [
        {
          title: 'Social',
          price: '£499',
          options: {
            accountManagerSupport: true,
            fullCatalogueAccess: true,
            individualStudent: false,
            corporateCharityNonProfit: true,
            socialMediaPromotion: true,
            onlineAdvertisements: false,
            advertisementsForTV: false,
            onlineEditorial: false,
            tvProgrammingPromos: false,
          },
          moreInfo:
            'Promoted / boosted posts and ads on social media platforms only (excludes YouTube. Unlimited media spend.',
        },
        {
          title: 'Digital',
          price: '£599',
          options: {
            accountManagerSupport: true,
            fullCatalogueAccess: true,
            individualStudent: false,
            corporateCharityNonProfit: true,
            socialMediaPromotion: true,
            onlineAdvertisements: true,
            advertisementsForTV: false,
            onlineEditorial: false,
            tvProgrammingPromos: false,
          },
          moreInfo:
            'Ads and branded content for any online platform. including YouTube and publisher websites. Unlimited media spend.',
        },
        {
          title: 'All-media',
          price: 'from £1249	',
          options: {
            accountManagerSupport: true,
            fullCatalogueAccess: true,
            individualStudent: false,
            corporateCharityNonProfit: true,
            socialMediaPromotion: true,
            onlineAdvertisements: true,
            advertisementsForTV: true,
            onlineEditorial: false,
            tvProgrammingPromos: false,
          },
          moreInfo:
            'Ads for linear or long-form OTT TV, radio, cinema, etc. Unlimited media spend. Single distribution territory',
        },
      ],
      Tv: [
        {
          title: 'Single-use',
          price: '£120',
          options: {
            accountManagerSupport: true,
            fullCatalogueAccess: true,
            individualStudent: false,
            corporateCharityNonProfit: false,
            socialMediaPromotion: false,
            onlineAdvertisements: false,
            advertisementsForTV: false,
            onlineEditorial: false,
            tvProgrammingPromos: true,
          },
          moreInfo: 'Productions for linear or digital (VOD) TV.',
        },
        {
          title: 'Episode/Series',
          price: 'from £225',
          options: {
            accountManagerSupport: true,
            fullCatalogueAccess: true,
            individualStudent: false,
            corporateCharityNonProfit: false,
            socialMediaPromotion: false,
            onlineAdvertisements: false,
            advertisementsForTV: false,
            onlineEditorial: false,
            tvProgrammingPromos: true,
          },
          moreInfo: '',
        },
      ],
    },
  },
}

const LicenseGrid = ({ licenses }) => {
  return (
    <StyledWrap>
      {Object.entries(licenses).map(([key, value]) => (
        <div className="group" key={key}>
          <h3 className="group-title">{key}</h3>
          {value.map((licence) => (
            <GridColumn
              key={licence.title}
              title={licence.title}
              price={licence.price}
              included={licence.options}
              moreInfo={licence.moreInfo}
            />
          ))}
        </div>
      ))}
    </StyledWrap>
  )
}

const GridColumn = ({ title, price, included, moreInfo, action }) => {
  return (
    <div>
      <h4 className="title">{title}</h4>
      <div className="action">{action}</div>
      <p className="price">{price ? `${price}` : ``}</p>
      {Object.values(included).map((value, i) => (
        <div key={i}>{value ? `✅` : `🚫`}</div>
      ))}
      <p className="moreInfo">{moreInfo}</p>
    </div>
  )
}

const PricingPage = () => {
  const { ...subscriptions } = content.subscriptions.licenses
  const { ...singleTrack } = content.singleTrack.licenses

  return (
    <PageLayout>
      <PageHeader
        title={content.pageTitle}
        description={content.pageDescription}
      />
      <Content>
        <Block
          title={content.subscriptions.sectionTitle}
          description={content.subscriptions.sectionDesc}
        >
          <LicenseGrid licenses={subscriptions} />
        </Block>
        <Block
          title={content.singleTrack.sectionTitle}
          description={content.singleTrack.sectionDesc}
        >
          <LicenseGrid licenses={singleTrack} />
        </Block>
      </Content>
    </PageLayout>
  )
}

export default PricingPage
