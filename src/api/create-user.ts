import api from '@/lib/api-client'
import { useMutation } from 'react-query'
import { User } from '@/types/user'

export const createUser = async (user: User): Promise<{ data: User }> => {
  return api.post('/users', user)
}

export const useCreateUser = (user: User) => {
  return useMutation({
    mutationFn: () => createUser(user),
  })
}
