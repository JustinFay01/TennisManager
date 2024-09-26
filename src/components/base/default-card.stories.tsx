import type { Meta, StoryObj } from '@storybook/react'

import DefaultCard from './default-card'

const meta = {
  component: DefaultCard,
} satisfies Meta<typeof DefaultCard>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Card Content',
  },
}
