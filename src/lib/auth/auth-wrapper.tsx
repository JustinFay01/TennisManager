import { WithChildren } from '@/types/props'
import { Auth0Provider } from '@auth0/auth0-react'

export const Auth0Wrapper = ({ children }: WithChildren) => {
  const domain = import.meta.env.VITE_AUTH_DOMAIN
  const clientId = import.meta.env.VITE_AUTH_CLIENT_ID
  const redirectUri = `${window.location.origin}/app`

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: redirectUri,
      }}
      cacheLocation="localstorage"
    >
      {children}
    </Auth0Provider>
  )
}
