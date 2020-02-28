import React from 'react'
import Image from './Image'

import { withA11y } from '@storybook/addon-a11y'

export const TestImage = () => (
  <Image src="https://placekitten.com/200/300" alt="Kitten" />
)

export default {
  title: 'Image',
  component: Image,
  decorators: [withA11y],
  title: 'Atoms|Image',
}
