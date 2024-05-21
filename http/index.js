import axios from 'axios'
import { USE_SERVER } from "~/url";

export const API_URL = USE_SERVER;

const $api = axios.create({
    withCredentials: true,
    baseURL: API_URL
})

$api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config 
})

$api.interceptors.response.use((config) => {
    return config
}, async (error) => {
    const originalRequest = error.config
    if (error.response.status === 401 && error.config && !error.config._isRetry) {
        originalRequest._isRetry = true
        try {
            const response = await axios.get(`${API_URL}auth/refresh`, {withCredentials: true})
            localStorage.setItem('token', response.data)
            return $api.request(originalRequest)
        } catch (e) {
            console.log("Пользователь не авторизован")
        }
    }
    throw error
})
export default $api