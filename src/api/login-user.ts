import api from '@/lib/api-client'
import { User } from '@/types/user'
import { useMutation } from 'react-query'

export const loginUser = async (user: User): Promise<{ data: User }> => {
  return api.post('/users/check-in', user)
}

export const useLoginUser = (user: User) => {
  return useMutation({
    mutationFn: () => loginUser(user),
  })
}
