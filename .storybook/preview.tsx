import type { Preview } from '@storybook/react'
import React from 'react'
import { StorybookProvider } from './storybook-provider'

export const decorators = [
  (Story) => (
    <StorybookProvider>
      <Story />
    </StorybookProvider>
  ),
]

const preview: Preview = {
  decorators: decorators,
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview
