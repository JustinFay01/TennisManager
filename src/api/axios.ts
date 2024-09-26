import a, { AxiosError } from 'axios'

const axios = a.create({
  baseURL: `${import.meta.env.VITE_API_URL}/api`,
  headers: {},
})

export const handleError = (error: Error | AxiosError) => {
  console.error(error)
  if (a.isAxiosError(error) && error.response) {
    return error.response
  }
}

export default axios
