import { StoryObj, Meta } from '@storybook/react'
import { ExploreSidebar, ExploreSidebarProps } from '.'

export default {
  title: 'ExploreSidebar',
  component: ExploreSidebar,
  args: {
    filterName: 'Por preço',
    items: ['Até R$ 40', 'R$ 40 à R$ 60']
  }
} as Meta<ExploreSidebarProps>

export const Basic: StoryObj<ExploreSidebarProps> = {}
