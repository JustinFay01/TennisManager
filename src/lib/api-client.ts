import axios from 'axios'

export const api = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/api`,
  headers: {},
})

api.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {
    // TODO: Global Notification System needed

    // TODO: Add redirects to corresponding error pages
    switch (error.response?.status) {
      case 400:
        console.error('Bad Request')
        break
      case 401:
        console.error('Unauthorized')
        break
      case 403:
        console.error('Forbidden')
        break
      case 404:
        window.location.href = '/not-found'
        break
      case 500:
        console.error('Internal Server Error')
        break
      default:
        console.error(`Unknown Error: ${error}`)
        break
    }

    return Promise.reject(error)
  },
)

export default api
