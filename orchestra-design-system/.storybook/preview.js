import React from 'react'
import { addDecorator } from '@storybook/react'
import { addParameters } from '@storybook/react'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import styled from '@emotion/styled'

import GlobalLayout from '../components/templates/GlobalLayout'

const Wrapper = styled.div`
  padding: 10px;
  /* text-align: center; */
`

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
})

const GlobalWrapper = (storFn) => (
  <GlobalLayout>
    <Wrapper>{storFn()}</Wrapper>{' '}
  </GlobalLayout>
)

addDecorator(GlobalWrapper)
