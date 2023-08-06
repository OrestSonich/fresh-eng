import React from 'react'
import EmailRegisterField from "../../components/third-party.ui/email.register.field"
import AppButton from "../../components/app.ui/app.button/app.button"
import './auth.page.scss'
import PasswordLoginField from "../../components/third-party.ui/password.login.field"
import { NavLink } from "react-router-dom"
import { REGISTER_ROUTE } from "../../utils/variables/routes-consts"


const LoginPage = () => {
    return (
        <div className="main-container">
            <div className="interactive-content">
                <h1>Login</h1>
                <h4>See your growth</h4>
                <EmailRegisterField/>
                <PasswordLoginField/>
                <div className="btn-holder">
                    <AppButton className="btn-app">Login</AppButton>
                </div>
                <NavLink to={REGISTER_ROUTE}>
                    <h3>Not registered yet?<span>Create an Account</span></h3>
                </NavLink>
            </div>
            <div className="decoration">
                <img src={require('../../img/cards-with-logo.png')} alt="123"/>
                <h2>Fresh English: where <br/>
                    games and learning go <br/>
                    hand in hand!</h2>
                <hr/>
            </div>
        </div>
    )
}

export default LoginPage