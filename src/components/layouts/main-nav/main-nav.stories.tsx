import type { Meta, StoryObj } from '@storybook/react';

import { MainNav } from './main-nav';

const meta = {
  component: MainNav,
} satisfies Meta<typeof MainNav>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
