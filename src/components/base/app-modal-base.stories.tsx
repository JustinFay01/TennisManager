import type { Meta, StoryObj } from '@storybook/react';

import { AppModalBase, AppModalBaseProps } from './app-modal-base';

const meta: Meta<AppModalBaseProps> = {
  component: AppModalBase,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isOpen: true,
    isLoading: false,
    onClose: () => {},
    children: 'Modal Content',
  },
};
