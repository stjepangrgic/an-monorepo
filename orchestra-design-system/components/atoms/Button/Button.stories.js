import React from 'react'
// import { action } from '@storybook/addon-actions'
import Button from './Button'
import { withA11y } from '@storybook/addon-a11y'

export const Default = () => <Button>Test Button</Button>
export const Accesible = () => <Button role="button">Accesible Button</Button>
export const InputButton = () => <input type="button" value="Input Button" />
export const Inacessible = () => (
  <button style={{ backgroundColor: 'red', color: 'darkRed' }}>
    Inaccessible button
  </button>
)

export default {
  title: 'Button',
  component: Button,
  decorators: [withA11y],
  title: 'Atoms|Button',
}
