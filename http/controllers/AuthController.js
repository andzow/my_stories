import { API_URL } from ".."
import AuthServices from "../services/AuthServices"
import { jwtDecode } from "jwt-decode";
import axios from "axios"

export default class AuthController {
    static async login(login, password) {
        try {
            const response = await AuthServices.login(login, password)
            localStorage.setItem("accessToken", response.data)
            const token = jwtDecode(response.data)
            useState('useUserAuth', () => true)
            useState('useUserData', () => token)
            return response.status
        } catch (e) {
            console.log(e.response?.data?.message)
            return e.response.status
        }
    }

    static async registration(login, password) {
        try {
            const response = await AuthServices.registration(login, password)
            return response.status
        } catch (e) {
            console.log(e.response?.data?.message)
            return e.response.status
        }
    }

    static async logout() {
        try {
            const response = await AuthServices.logout()
            localStorage.removeItem('token')
            useState('useUserAuth', () => false)
        } catch (e) {
            console.log(e.response?.data?.message)
        }
    }

    static async cheackAuth() {
        try {
            const response = await axios.get(`${API_URL}auth/refresh`, {withCredentials: true})
            localStorage.setItem("accessToken", response.data)
            const token = jwtDecode(response.data)
            useState('useUserAuth', () => true)
            useState('useUserData', () => token)
            return response.status
        } catch (e) {
            console.log(e.response?.data?.message)
            return e.response.status
        }
    }
}