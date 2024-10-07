import React from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

import { router } from '@/app/router'
import { Auth0Wrapper } from './lib/auth/auth-wrapper'
import { ErrorBoundary } from 'react-error-boundary'

const root = createRoot(document.getElementById('root')!)

root.render(
  <React.StrictMode>
    <ErrorBoundary
      FallbackComponent={({ error }) => (
        <div role="alert">
          <p>Something went REALLY wrong | Updated | Twice!:</p>
          <pre style={{ color: 'red' }}>{error.message}</pre>
        </div>
      )}
    >
      <Auth0Wrapper>
        <RouterProvider router={router} />
      </Auth0Wrapper>
    </ErrorBoundary>
  </React.StrictMode>,
)
