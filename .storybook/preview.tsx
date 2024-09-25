import type { Preview } from '@storybook/react';
import React from 'react';
import AppProvider from '../src/app/provider';
import { MemoryRouter } from 'react-router-dom';

export const decorators = [
  (Story) => (
    <MemoryRouter>
      <AppProvider>
        <Story />
      </AppProvider>
    </MemoryRouter>
  ),
];

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
};

export default preview;
