import $api from "..";

export default class AuthServices {
    static async login(login, password) {
        return $api.post('/auth/login', { login, password })
    }

    static async registration(login, password) {
        return $api.post('/auth/registration', { login, password })
    }

    static async logout() {
        return $api.post('/logout')
    }
}