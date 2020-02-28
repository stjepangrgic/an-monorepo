import React from 'react'
// import { action } from '@storybook/addon-actions'
import Logo from './Logo'
import { withA11y } from '@storybook/addon-a11y'

export const Default = () => <Logo />
export const Small = () => <Logo size="small" />

export default {
  title: 'Logo',
  component: Logo,
  decorators: [withA11y],
  title: 'Atoms|Logo',
}
