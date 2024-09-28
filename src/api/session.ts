import { PaginatedResponse, Session, SessionType } from '../types'

import axios from '../lib/api-client'

const entityUrl = '/sessions'

export const getSessionsList = async (params: {
  pageNumber: number
  pageSize: number
}) => {
  return axios
    .get<PaginatedResponse<Session>>(`${entityUrl}/all`, {
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

export const createSession = async (
  type: SessionType,
  name: string,
  date: string,
  description?: string,
  coachId?: string,
  customerAndPrices?: { customerId: string; price: number }[],
) => {
  return axios
    .post(`${entityUrl}/create`, {
      type,
      name,
      date,
      description,
      coachId,
      customerAndPrices,
    })
    .then((x) => {
      return x
    })
}

export const addCustomersToSession = async (
  sessionIds: string[],
  customersAndPrices: { customerId: string; price: number }[],
) => {
  return axios.patch(`${entityUrl}/add-customers`, {
    sessionIds,
    customersAndPrices,
  })
}
