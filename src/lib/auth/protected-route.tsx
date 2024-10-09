import { Loading } from '@/components/ui/feedback/loading/loading'
import { WithChildren } from '@/types/props'
import { withAuthenticationRequired } from '@auth0/auth0-react'

export const ProtectedRoute = ({ children }: WithChildren) => {
  const Component = withAuthenticationRequired(() => <>{children}</>, {
    onRedirecting: () => <Loading />,
  })

  return <Component />
}
