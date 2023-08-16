import freshEngApi from "../http/api"


export default class UserService {
    static fetchUser() {
        return freshEngApi.get('/user')
    }
}