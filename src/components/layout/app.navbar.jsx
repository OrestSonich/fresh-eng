import React from 'react'
import '../../styles/layout/navbar.scss'
import BookBookmark from '@phosphor-icons/react/BookBookmark'
import { MagnifyingGlass } from "@phosphor-icons/react"
import { MAIN_PAGE_ROUTE } from "../../utils/variables/routes-consts"
import AppButton from "../app.ui/app.button"


const AppNavbar = ({ navigator }) => {

    return (
        <nav>
            <img onClick={() => navigator(MAIN_PAGE_ROUTE)} src={require('../../img/logo-fresh.jpg')} alt=""/>
            <p className="title">FRESHENG</p>
            <BookBookmark color={'#FAF9F9'} size={48} className="chose-mode-book"/>
            <MagnifyingGlass color={'#FAF9F9'} size={48} className="search"/>
            <AppButton className="sign-up-btn">Sign Up</AppButton>
            <AppButton className="sign-in-btn">sign in</AppButton>

        </nav>
    )
}

export default AppNavbar