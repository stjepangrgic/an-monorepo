import React from 'react'
// import { action } from '@storybook/addon-actions'
import Link from './Link'
import { withA11y } from '@storybook/addon-a11y'

import { Button } from '../../atoms'

export const Default = () => <Link href="javascript:void()">Default Link</Link>
export const LeftIcon = () => (
  <Link leftIcon="💩" href="javascript:void()">
    Left Icon
  </Link>
)
export const RightIcon = () => (
  <Link rightIcon=" 💩" href="javascript:void()">
    Right Icon
  </Link>
)

// export const LinkLooksLikeAButton = () => (
//   <Link href="javascript:void()" as={Button}>
//     Looks like Button Primary
//   </Link>
// )

export const LinkLooksLikeAButton = () => <Button as={Link}>Test Button</Button>

export default {
  title: 'Link',
  component: Link,
  decorators: [withA11y],
  title: 'Atoms|Link',
}
