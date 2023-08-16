import { API_URL } from "../http/api"
import axios from "axios"


const AUTH_BASIC_URL = '/auth'

export default class AuthService {



    static async login(email, password) {
        return await axios.post(`${API_URL}${AUTH_BASIC_URL}/login`,
                                { email, password },
                                { withCredentials: true })
    }

    static async register(email, password, phoneNumber, firstName, lastName) {
        return await axios.post(`${API_URL}${AUTH_BASIC_URL}/register`,
                                {
                                    email,
                                    password,
                                    firstName,
                                    lastName,
                                    phoneNumber
                                },
                                { withCredentials: true })
    }
}