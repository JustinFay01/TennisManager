import { Outlet } from 'react-router-dom'
import AppProvider from '@/app/provider'
import { AppLayout } from '@/components/layouts/app-layout'

export const AppRoot = () => {
  return (
    <AppProvider>
      <AppLayout>
        <Outlet />
      </AppLayout>
    </AppProvider>
  )
}
