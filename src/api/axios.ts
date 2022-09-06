import axios from 'axios'

let baseURL
if (process.env.NODE_ENV === 'development') {
    baseURL = 'http://localhost:5000/api/v1'
} 
if (process.env.NODE_ENV === 'production') {
    baseURL = `${ process.env.API_URL }/api/v1`
} 
else {
    baseURL = 'http://localhost:5000/api/v1'
}
console.log(baseURL)
console.log(process.env.NODE_ENV)
console.log(process.env.API_URL)

export const axiosPrivate = axios.create({
    baseURL: baseURL,
    headers: { 
        'Content-Type': 'application/json' 
    },
    withCredentials: true
})

const instance = axios.create({
    baseURL: baseURL
})

export default instance