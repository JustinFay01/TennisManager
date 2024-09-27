import { ProtectedRoute } from '@/lib/auth/protected-route'
import { createBrowserRouter } from 'react-router-dom'
import { AppRoot } from './routes/root'

export const router = createBrowserRouter([
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
        path: 'customers',
        lazy: async () => {
          const { Customers } = await import('@/app/routes/app/customers')
          return { Component: Customers }
        },
      },
    ],
  },
  {
    path: '*',
    lazy: async () => {
      const { NotFound } = await import('@/app/routes/not-found')
      return { Component: NotFound }
    },
  },
])
