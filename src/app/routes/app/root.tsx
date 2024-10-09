import { AppLayout } from '@/components/layouts/app-layout'
import { Outlet } from 'react-router-dom'

export const AppRoot = () => {
  return (
    <AppLayout>
      <Outlet />
    </AppLayout>
  )
}
