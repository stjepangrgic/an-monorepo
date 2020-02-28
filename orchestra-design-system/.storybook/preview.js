import React from 'react'
import { addDecorator } from '@storybook/react'

import GlobalLayout from '../components/templates/GlobalLayout'

const GlobalWrapper = (storFn) => (
  <GlobalLayout>
    {storFn()}
  </GlobalLayout>
)

addDecorator(GlobalWrapper)
