import React from 'react'
import './layout.scss'
import AppFooter from "./app.footer/app.footer"
import AppNavbar from "./app.navbar/app.navbar"
import { useLocation } from "react-router-dom"
import { LOGIN_ROUTE, REGISTER_ROUTE } from "../../utils/variables/routes-consts"


const Layout = ({ children }) => {
    const navigator = useLocation()
    return (
        <div className="app">
            {navigator.pathname === REGISTER_ROUTE || navigator.pathname === LOGIN_ROUTE
                ? null
                : <AppNavbar/>}
            <div className="content">
                {children}
            </div>
            {navigator.pathname === REGISTER_ROUTE || navigator.pathname === LOGIN_ROUTE
                ? null
                : <AppFooter/>}
        </div>
    )
}

export default Layout