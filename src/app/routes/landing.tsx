import { useAuth0 } from '@auth0/auth0-react'
import { Button, Stack, Typography } from '@mui/material'

export const Landing = () => {
  const LoginButton = () => {
    const { loginWithRedirect } = useAuth0()

    return (
      <Button
        onClick={() =>
          loginWithRedirect({
            appState: { returnTo: '/app/customers' },
          })
        }
        variant="contained"
      >
        Log In
      </Button>
    )
  }

  const LogoutButton = () => {
    const { logout } = useAuth0()

    return (
      <Button onClick={() => logout()} variant="contained">
        Log Out
      </Button>
    )
  }

  const UnprotectedButton = () => {
    return (
      <Button variant="contained" href="/app/customers">
        Unprotected
      </Button>
    )
  }

  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      padding="4rem"
    >
      <Typography variant="h1">Welcome to the Landing Page</Typography>
      <Typography variant="h6">
        This is the landing page of the application
      </Typography>
      <Stack direction="row" spacing={2}>
        <LoginButton />
        <LogoutButton />
        <UnprotectedButton />
      </Stack>
    </Stack>
  )
}
