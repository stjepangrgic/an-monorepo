import React from 'react'
// import { action } from '@storybook/addon-actions'
import Link from './Link'
// import { withA11y } from '@storybook/addon-a11y'

export default {
  title: 'Link',
  component: Link,
  // decorators: [withA11y],
}

export const Default = () => <Link href="javascript:void()">Default Link</Link>
export const LeftIcon = () => (
  <Link leftIcon="Icon" href="javascript:void()">
    Left Icon
  </Link>
)
export const RightIcon = () => (
  <Link rightIcon="Icon" href="javascript:void()">
    Right Icon
  </Link>
)

export const LooksLikeButtonSecondary = () => (
  <Link href="javascript:void()" variant="primary">
    Looks like Button Primary
  </Link>
)
