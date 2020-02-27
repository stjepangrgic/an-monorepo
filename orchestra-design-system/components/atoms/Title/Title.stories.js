import React from 'react'
// import { action } from '@storybook/addon-actions'
import Title from './Title'

export default {
  title: 'Title',
  component: Title,
}

export const Default = () => <Title>Heading 1</Title>
export const TitleAs = () => <Title as="h2">Heading 1</Title>
