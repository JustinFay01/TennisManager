import { Outlet } from 'react-router-dom';

import AppProvider from '@/app/provider';
import { MainLayout } from '@/components/layouts/main-layout';

export const AppRoot = () => {
  return (
    <AppProvider>
      <MainLayout>
        <Outlet />
      </MainLayout>
    </AppProvider>
  );
};
