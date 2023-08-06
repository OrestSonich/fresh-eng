import React from 'react'
import './auth.page.scss'
import AppButton from "../../components/app.ui/app.button/app.button"
import PasswordRegisterField from "../../components/third-party.ui/password.register.field"
import EmailRegisterField from "../../components/third-party.ui/email.register.field"
import { NavLink } from "react-router-dom"
import { LOGIN_ROUTE } from "../../utils/variables/routes-consts"


const RegisterPage = () => {


    return (
        <div className="main-container">
            <div className="interactive-content">
                <h1>Let's Freshen up your <br/>
                    English skills</h1>
                <h4>Get started - it`s free.</h4>
                <EmailRegisterField/>
                <PasswordRegisterField/>
                <div className="btn-holder">
                    <AppButton className="btn-app">Sign Up</AppButton>
                </div>
                <NavLink to={LOGIN_ROUTE}>
                    <h3>Already have an account?<span>Log In</span></h3>
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

export default RegisterPage