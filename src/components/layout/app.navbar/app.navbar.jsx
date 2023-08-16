import React, { useContext, useEffect } from 'react'
import './navbar.scss'
import BookBookmark from '@phosphor-icons/react/BookBookmark'
import { MagnifyingGlass, SignOut } from "@phosphor-icons/react"
import AppButton from "../../app.ui/app.button/app.button"
import { Link, NavLink } from "react-router-dom"
import {
    CHOSE_MOD_ROUTE,
    LOGIN_ROUTE,
    MAIN_PAGE_ROUTE,
    PROFILE_ROUTE,
    REGISTER_ROUTE
} from "../../../utils/variables/routes-consts"
import { Context } from "../../../index"
import { observer } from "mobx-react-lite"
import ModalConfirm from "../../third-party.ui/modal.confirm/modal.confirm"
import { useDisclosure } from "@mantine/hooks"
import { toast } from "react-hot-toast"
import { Avatar } from "@mantine/core"


const AppNavbar = () => {

    const { store } = useContext(Context)

    const [ openedConfirm, { open: openConfirm, close: closeConfirm } ] = useDisclosure(false)

    useEffect(() => {
        if (localStorage.getItem('token')) {
            store.checkAuth()
        }
    }, [])

    const logoutHandler = () => {
        closeConfirm()
        store.logout()
        toast.success('You are logout!')
    }



    return (
        <nav>
            {store.isAuth
                ?
                <div className="logo-title">
                    <Link to={PROFILE_ROUTE}>
                        <Avatar radius="xl" mr={30} title="profile" size="lg">{store.user.firstName ?
                            `${store.user.firstName.charAt(0)}${store.user.lastName.charAt(0)}` :
                            ""
                        }</Avatar>
                    </Link>
                    <Link to={MAIN_PAGE_ROUTE}>
                        <p className="title">FRESHENG</p>
                    </Link>
                </div>
                :
                <Link to={MAIN_PAGE_ROUTE}>
                    <div className="logo-title">
                        <img src={require('../../../img/logo-fresh.jpg')} alt=""/>
                        <p className="title">FRESHENG</p>
                    </div>
                </Link>
            }
            <NavLink to={CHOSE_MOD_ROUTE}>
                <BookBookmark color={'#FAF9F9'} size={48} className="chose-mode-book"/>
            </NavLink>
            <NavLink to={'/profile:id'}>
                <MagnifyingGlass color={'#FAF9F9'} size={48} className="search"/>
            </NavLink>
            <div className="btns-container">
                {store.isAuth ?
                    <SignOut className="cursor-pointer" onClick={() => openConfirm()} size={52}/> :
                    <div>
                        <NavLink className="sign-up-btn" to={REGISTER_ROUTE}>
                            <AppButton>Sign Up</AppButton>
                        </NavLink>
                        <NavLink to={LOGIN_ROUTE}>
                            <AppButton className="sign-in-btn">sign in</AppButton>
                        </NavLink>
                    </div>}
            </div>

            <ModalConfirm header="Do you really want to log out?"
                          opened={openedConfirm}
                          callback={logoutHandler}
                          close={closeConfirm}/>
        </nav>
    )
}

export default observer(AppNavbar)