import React from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

import { router } from '@/app/router'
import { Auth0Wrapper } from './lib/auth/auth-wrapper'

const root = createRoot(document.getElementById('root')!)

root.render(
  <Auth0Wrapper>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Auth0Wrapper>,
)
