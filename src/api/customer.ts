import { Customer, PaginatedResponse } from '../types/types'

import axios from '../lib/api-client'

const entityUrl = '/customers'

export const getCustomersList = async (params: {
  pageNumber: number
  pageSize: number
}) => {
  return axios
    .get<PaginatedResponse<Customer>>(`${entityUrl}/all`, {
      params: {
        page: params.pageNumber || 1,
        pageSize: params.pageSize || 10,
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
    })
}

export const createCustomer = async (
  type: 'coach' | 'customer',
  first: string,
  last: string,
  email?: string,
  phone?: string,
) => {
  return axios
    .post(`${entityUrl}/create`, {
      type,
      first,
      last,
      email,
      phone,
    })
    .then((x) => {
      return x
    })
}
