import { Auth0Provider } from '@auth0/auth0-react'

export const Auth0Wrapper = ({ children }: React.PropsWithChildren) => {
  return (
    <Auth0Provider
      domain={import.meta.env.VITE_AUTH_DOMAIN}
      clientId={import.meta.env.VITE_AUTH_CLIENT_ID}
      authorizationParams={{
        redirect_uri: `${window.location.origin}/app`,
      }}
    >
      {children}
    </Auth0Provider>
  )
}
