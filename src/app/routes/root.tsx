import { Outlet } from 'react-router-dom'
import AppProvider from '@/app/provider'
import { useAuth0 } from '@auth0/auth0-react'
import { AppLayout } from '@/components/layouts/app-layout'

//TODO: Place in own class
const LoginButton = () => {
  const { loginWithRedirect } = useAuth0()

  return <button onClick={() => loginWithRedirect()}>Log In</button>
}

const LogoutButton = () => {
  const { logout } = useAuth0()

  return (
    <button
      onClick={() =>
        logout({ logoutParams: { returnTo: window.location.origin } })
      }
    >
      Log Out
    </button>
  )
}

export const AppRoot = () => {
  return (
    <AppProvider>
      <AppLayout>
        <LoginButton />
        <LogoutButton />
        <Outlet />
      </AppLayout>
    </AppProvider>
  )
}
