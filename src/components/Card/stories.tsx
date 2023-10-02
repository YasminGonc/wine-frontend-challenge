import { StoryObj, Meta } from '@storybook/react'
import { Card, CardProps } from '.'

export default {
  title: 'Card',
  component: Card,
  args: {
    title: 'Bacalhôa Meia Pipa Private Selection Castelão Syrah 2014',
    wineImage: '/img/wine.png',
    fullPrice: '37,40',
    memberPriceInteger: '30',
    memberPriceCents: '00'
  }
} as Meta<CardProps>

export const Basic: StoryObj<CardProps> = {}

export const Promotion: StoryObj<CardProps> = {}

Promotion.args = {
  discountPercentage: '60'
}
