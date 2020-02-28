import React from 'react'
// import { action } from '@storybook/addon-actions'
import Title from './Title'
import { withA11y } from '@storybook/addon-a11y'

export const H1 = () => <Title h="1">Heading 1</Title>
export const H2 = () => <Title h="2">Heading 2</Title>
export const H3 = () => <Title h="3">Heading 3</Title>
export const H4 = () => <Title h="4">Heading 4</Title>
export const H5 = () => <Title h="5">Heading 5</Title>
export const H6 = () => <Title h="6">Heading 6</Title>
export const H1asDiv = () => (
  <Title h="1" as="div">
    Heading 1
  </Title>
)

export default {
  title: 'Title',
  component: Title,
  decorators: [withA11y],
  title: 'Atoms|Title',
}
