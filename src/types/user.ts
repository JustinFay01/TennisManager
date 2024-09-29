import { User as Auth0User } from '@auth0/auth0-react'

type ExtendedAuth0User<T> = Auth0User & T

export type User = ExtendedAuth0User<{
  id: string
  type: 'coach' | 'customer' | 'admin'
}>
