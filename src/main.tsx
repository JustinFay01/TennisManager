import React from 'react'
import { createRoot } from 'react-dom/client'
import '@/index.css'
import { RouterProvider } from 'react-router-dom'

import { router } from '@/app/router'
import { Auth0Provider } from '@auth0/auth0-react'

const root = createRoot(document.getElementById('root')!)

root.render(
  <Auth0Provider
    domain={import.meta.env.VITE_AUTH_DOMAIN}
    clientId={import.meta.env.VITE_AUTH_CLIENT_ID}
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Auth0Provider>,
)
