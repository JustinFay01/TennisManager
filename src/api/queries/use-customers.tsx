import { useQuery } from 'react-query'

import { Customer, PaginatedResponse } from '../../types'
import axios from '../axios'

const entityUrl = '/customers'

export const useCustomers = () => {
  return useQuery('customers', () =>
    axios
      .get<PaginatedResponse<Customer>>(`${entityUrl}/all`, {
        // ignore pagination for now
        params: {
          page: 1,
          pageSize: 10_000,
        },
      })
      .then((res) => {
        if (res.data && res.data.items.length > 0) {
          return res.data
        } else {
          return {
            items: [],
            totalPages: 0,
            totalItems: 0,
          }
        }
      }),
  )
}
