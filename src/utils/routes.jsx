import { AUTH_ROUTE, CARDS_MODE_ROUTE, CHOSE_MOD_ROUTE, MAIN_PAGE_ROUTE, PROFILE_ROUTE } from "./consts"
import MainPage from "../pages/main.page"
import AuthPage from "../pages/auth.page"
import CardModePage from "../pages/card.mode.page"
import ChoseModPage from "../pages/chose.mod.page"
import profilePage from "../pages/profile.page"


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
        path: AUTH_ROUTE,
        component: AuthPage
    },
]