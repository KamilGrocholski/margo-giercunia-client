import { AxiosRequestConfig } from 'axios'
import { useEffect } from 'react'
import { axiosPrivate } from '../api/axios'
import { refresh } from '../api/userAPI'
import Session from '../store/SesstionStore'

const useAxiosPrivate = () => {

    const { accessToken, setAccessToken } = Session()

    useEffect(() => {

        const requestInterceptor = axiosPrivate.interceptors.request.use(
            (config: AxiosRequestConfig) => {
                return {
                    headers: {
                        'Authorization': `Bearer ${ accessToken }`
                    }
                }
            }, (error) => Promise.reject(error)
        );

        const responseInterceptor = axiosPrivate.interceptors.response.use(
            response => response,
            async (error) => {
                const prevRequest = error?.config
                if (error?.response?.status === 403 && !prevRequest?.sent) {
                    prevRequest.sent = true
                    const newAccessToken = await refresh()
                    if (newAccessToken.accessToken) setAccessToken(newAccessToken.accessToken)
                    prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`
                    return axiosPrivate(prevRequest)
                }
                return Promise.reject(error)
            }
        );

        return () => {
            axiosPrivate.interceptors.request.eject(requestInterceptor)
            axiosPrivate.interceptors.response.eject(responseInterceptor)
        }
    }, [])

    return axiosPrivate 
}

export default useAxiosPrivate