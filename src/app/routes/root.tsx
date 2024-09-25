import { MainLayout } from '@/components/layouts/main-layout';
import { Outlet } from 'react-router-dom';
import AppProvider from '@/app/provider';

export const AppRoot = () => {
  return (
    <AppProvider>
      <MainLayout>
        <Outlet />
      </MainLayout>
    </AppProvider>
  );
};