import { Coach } from '../types'

import axios from './axios'
const entityUrl = '/coaches'

export const getCoachesList = async () => {
  return axios.get<Coach[]>(`${entityUrl}/all`)
}
