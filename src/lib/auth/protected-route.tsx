import { Loading } from '@/components/ui/feedback/loading/loading'
import { WithChildren } from '@/types/props'
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react'

export const ProtectedRoute = ({ children }: WithChildren) => {
  const { isAuthenticated } = useAuth0()

  console.log('isAuthenticated', isAuthenticated)
  if (isAuthenticated) {
    return <>{children}</>
  }

  const Component = withAuthenticationRequired(() => <>{children}</>, {
    onRedirecting: () => <Loading />,
  })

  return <Component />
}
