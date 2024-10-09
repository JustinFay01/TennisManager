import { Coach } from '../types/props'

import axios from '../lib/api-client'
const entityUrl = '/coaches'

export const getCoachesList = async () => {
  return axios.get<Coach[]>(`${entityUrl}/all`)
}
