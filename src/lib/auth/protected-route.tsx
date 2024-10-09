import { useAuth0 } from '@auth0/auth0-react'

export const ProtectedRoute = ({ children }: React.PropsWithChildren) => {
  return <>{children}</>
}
