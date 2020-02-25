import React from 'react'
import Image from './Image'

export default {
  title: 'Image',
  component: Image,
}

export const TestImage = () => (
  <Image src="https://placekitten.com/200/300" alt="Kitten" />
)
