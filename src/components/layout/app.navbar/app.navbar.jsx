import React from 'react'
import './navbar.scss'
import BookBookmark from '@phosphor-icons/react/BookBookmark'
import { MagnifyingGlass } from "@phosphor-icons/react"
import AppButton from "../../app.ui/app.button/app.button"
import { Link, NavLink } from "react-router-dom"
import { CHOSE_MOD_ROUTE, LOGIN_ROUTE, MAIN_PAGE_ROUTE, REGISTER_ROUTE } from "../../../utils/variables/routes-consts"


const AppNavbar = () => {

    return (
        <nav>
            <Link to={MAIN_PAGE_ROUTE}>
                <div className="logo-title">
                    <img src={require('../../../img/logo-fresh.jpg')} alt=""/>
                    <p className="title">FRESHENG</p>
                </div>
            </Link>
            <NavLink to={CHOSE_MOD_ROUTE}>
                <BookBookmark color={'#FAF9F9'} size={48} className="chose-mode-book"/>
            </NavLink>
            <NavLink to={'/profile:id'}>
                <MagnifyingGlass color={'#FAF9F9'} size={48} className="search"/>
            </NavLink>
            <NavLink className="sign-up-btn" to={REGISTER_ROUTE}>
                <AppButton>Sign Up</AppButton>
            </NavLink>
            <NavLink to={LOGIN_ROUTE}>
                <AppButton className="sign-in-btn">sign in</AppButton>
            </NavLink>

        </nav>
    )
}

export default AppNavbar