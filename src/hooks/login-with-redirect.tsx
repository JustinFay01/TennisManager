import { useLoginUser } from '@/api/login-user'
import { useAuth0, RedirectLoginOptions } from '@auth0/auth0-react'

export const useLoginWithRedirect = async (options: RedirectLoginOptions) => {
  const { loginWithRedirect: auth0login, user } = useAuth0()

  if (!user) {
    throw new Error('You must be logged in to use this function')
  }

  const login = useLoginUser(user)

  login
    .mutateAsync()
    .then((data) => {
      console.log(data)
    })
    .catch((error) => {
      console.error(error)
    })

  return auth0login(options)
}
