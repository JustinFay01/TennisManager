import axios from 'axios'
import { useMutation } from 'react-query'

export const useCreateCustomer = () => {
  return useMutation(
    (data: {
      type: 'coach' | 'customer'
      first: string
      last: string
      email?: string
      phone?: string
    }) => {
      return axios.post('/customers/create', data).then((res) => res.data)
    },
  )
}
