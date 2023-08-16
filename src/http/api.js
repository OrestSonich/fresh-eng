import axios from "axios"


export const API_URL = process.env.REACT_APP_API_BASE_URL

const freshEngApi = axios.create({
                                     withCredentials: true,
                                     baseURL: API_URL
                                 })

freshEngApi.interceptors.request.use(config => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config
})

export default freshEngApi