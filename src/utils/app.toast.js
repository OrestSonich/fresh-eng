import { toast } from "react-hot-toast"


const options = {
    duration: 4000,
}

export function toastCreator(msg, type) {
    console.log('tests')
    switch (type) {
        case "success":
            toast.success(msg, options)
            break
        case "error":
            toast.error(msg, options)
            break
        case "loading":
            toast.loading(msg, options)
            break
        default:
            toast(msg, options)
            break
    }
}