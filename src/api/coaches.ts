import { Coach } from '../types'

import axios from '../lib/api-client'
const entityUrl = '/coaches'

export const getCoachesList = async () => {
  return axios.get<Coach[]>(`${entityUrl}/all`)
}
