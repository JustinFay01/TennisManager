// import { useLoginUser } from '@/api/login-user'
// import { useAuth0, RedirectLoginOptions } from '@auth0/auth0-react'

// export const useLoginWithRedirect = () => {
//   const { loginWithRedirect: auth0login, user, isAuthenticated } = useAuth0()

//   // Conditionally create the login mutation only if the user is authenticated

//   const loginWithRedirect = async (options?: RedirectLoginOptions) => {
//     if (!isAuthenticated) {
//       // If the user is not logged in, redirect to login
//       return auth0login(options)
//     }

//     if (login) {
//       try {
//         // Trigger the login mutation if user exists
//         const data = await login.mutateAsync()
//         console.log(data)
//       } catch (error) {
//         console.error(error)
//       }
//     }
//   }

//   return loginWithRedirect
// }
