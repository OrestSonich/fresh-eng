import { makeAutoObservable } from "mobx"
import AuthService from "../services/AuthService"
import UserService from "../services/UserService"


export default class Store {
    user = {}
    isAuth = false

    constructor() {
        makeAutoObservable(this)
    }

    setUser(user) {
        this.user = user
    }

    setIsAuth(isAuth) {
        this.isAuth = isAuth
    }

    async login(email, password) {
        try {
            const responseToken = await AuthService.login(email, password)
            localStorage.setItem('token', responseToken.data.token)

            const responseUser = await UserService.fetchUser()

            this.setIsAuth(true)
            this.setUser(responseUser.data)
        } catch (e) {

        }
    }

    async register(email, password, phoneNumber, firstName, lastName) {
        try {
            const responseToken = await AuthService.register(email, password, phoneNumber, firstName, lastName)
            localStorage.setItem('token', responseToken.data.token)
            const responseUser = await UserService.fetchUser()

            this.setIsAuth(true)
            this.setUser(responseUser.data)
        } catch (e) {
            console.log(e.response.data.message)
        }
    }

    async checkAuth() {
        try {
            const response = await UserService.fetchUser()
            this.setIsAuth(true)
            this.setUser(response.data)
        } catch (e) {
            console.log(e.response.data.message)
        }
    }

    async logout() {
        localStorage.removeItem('token')
        this.setUser(null)
        this.setIsAuth(false)
    }
}