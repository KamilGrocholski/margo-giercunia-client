import axios from 'axios'
import { refresh } from './userAPI'

let baseURL
if (process.env.NODE_ENV === 'development') {
    baseURL = 'http://localhost:5000/api/v1'
} 
if (process.env.NODE_ENV === 'production') {
    baseURL = `${ process.env.REACT_APP_API_URL as string }/api/v1`
} 
else {
    baseURL = 'http://localhost:5000/api/v1'
}
console.log(baseURL)
console.log(process.env.NODE_ENV)
console.log(process.env.REACT_APP_API_URL)

const instance = axios.create({
    baseURL: baseURL,
    headers: { 
        'Content-Type': 'application/json'
    }
})

export const axiosPrivate = axios.create({
    baseURL: baseURL,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true
})

// Request interceptor for API calls
axiosPrivate.interceptors.request.use(
    async config => {
        const token = await refresh()         
        if (token.accessToken)
      config.headers = { 
        'Authorization': `Bearer ${ token.accessToken }`,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
      return config
    },
    error => {
      Promise.reject(error)
  });
  
  // Response interceptor for API calls
  axiosPrivate.interceptors.response.use((response) => {
    return response
  }, async function (error) {
    const originalRequest = error.config
    if (error.response.status === 403 && !originalRequest._retry) {
      originalRequest._retry = true
      const token = await refresh()         
      if (token.accessToken)
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + token.accessToken
      return axiosPrivate(originalRequest)
    }
    return Promise.reject(error)
  });

export default instance