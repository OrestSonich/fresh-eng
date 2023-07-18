import {
    CARDS_MODE_ROUTE,
    CHOSE_MOD_ROUTE,
    LOGIN_ROUTE,
    MAIN_PAGE_ROUTE,
    PROFILE_ROUTE,
    REGISTER_ROUTE
} from "./consts"
import MainPage from "../pages/main.page"
import LoginPage from "../pages/login.page"
import CardModePage from "../pages/card.mode.page"
import ChoseModPage from "../pages/chose.mod.page"
import profilePage from "../pages/profile.page"
import RegisterPage from "../pages/register.page"


export const authRoutes = [
    {
        path: CARDS_MODE_ROUTE,
        component: CardModePage
    },
    {
        path: CHOSE_MOD_ROUTE,
        component: ChoseModPage
    },
    {
        path: PROFILE_ROUTE(),
        component: profilePage
    },
]
export const publicRoutes = [
    {
        path: MAIN_PAGE_ROUTE,
        component: MainPage
    },
    {
        path: LOGIN_ROUTE,
        component: LoginPage
    },
    {
        path: REGISTER_ROUTE,
        component: RegisterPage
    },
]