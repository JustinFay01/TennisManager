import { ProtectedRoute } from '@/lib/auth/protected-route'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { AppRoot } from './routes/app/root'

const createRouter = () =>
  createBrowserRouter([
    {
      path: '/',
      lazy: async () => {
        const { Landing } = await import('@/app/routes/landing')
        return { Component: Landing }
      },
    },
    {
      path: '/app',
      element: (
        <ProtectedRoute>
          <AppRoot />
        </ProtectedRoute>
      ),
      children: [
        {
          path: '/app',
          lazy: async () => {
            const { DashboardRoute } = await import(
              '@/app/routes/app/dashboard'
            )
            return { Component: DashboardRoute }
          },
        },
        {
          path: 'customers',
          lazy: async () => {
            const { Customers } = await import('@/app/routes/app/customers')
            return { Component: Customers }
          },
        },
        {
          path: 'schedule',
          lazy: async () => {
            const { ScheduleRoute } = await import('@/app/routes/app/schedule')
            return { Component: ScheduleRoute }
          },
        },
      ],
    },
    {
      path: '*',
      lazy: async () => {
        const { NotFound } = await import('@/app/routes/errors/not-found')
        return { Component: NotFound }
      },
    },
  ])

export const AppRouter = () => {
  const router = createRouter()

  return <RouterProvider router={router} />
}
