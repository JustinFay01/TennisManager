import { useAuth0 } from '@auth0/auth0-react'

export const ProtectedRoute = ({ children }: React.PropsWithChildren) => {
  const { isAuthenticated, loginWithRedirect } = useAuth0()

  if (!isAuthenticated) {
    console.log('Not authenticated, redirecting to login')
    loginWithRedirect()
    return null
  }

  return children
}
