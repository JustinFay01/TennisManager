import { useAuth0 } from '@auth0/auth0-react'
import { ErrorBoundary } from 'react-error-boundary'

export const ProtectedRoute = ({ children }: React.PropsWithChildren) => {
  const { isAuthenticated, loginWithRedirect, isLoading } = useAuth0()

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (!isAuthenticated) {
    console.log('Not authenticated, redirecting to login')
    // loginWithRedirect()
    return (
      <div>
        <h1>Not authenticated</h1>
        <button onClick={() => loginWithRedirect()}>Log In</button>
      </div>
    )
  }

  return (
    <>
      <ErrorBoundary
        fallback={
          <div>
            <h1>Something went wrong.</h1>
            <button onClick={() => window.location.reload()}>Reload</button>
          </div>
        }
      >
        {children}
      </ErrorBoundary>
    </>
  )
}
