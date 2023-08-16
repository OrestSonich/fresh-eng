import React, { useContext, useState } from 'react'
import EmailRegisterField from "../../components/third-party.ui/email.register.field"
import AppButton from "../../components/app.ui/app.button/app.button"
import './auth.page.scss'
import PasswordLoginField from "../../components/third-party.ui/password.login.field"
import { NavLink, useNavigate } from "react-router-dom"
import { CHOSE_MOD_ROUTE, REGISTER_ROUTE } from "../../utils/variables/routes-consts"
import { Context } from "../../index"
import validator from "validator"


const LoginPage = () => {
    const navigate = useNavigate()
    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")
    const [ emailValid, setEmailValid ] = useState(true)

    const handleEmail = (email) => {
        setEmail(email)
    }
    const handlePassword = (password) => {
        setPassword(password)
    }
    const { store } = useContext(Context)
    const handleLoginBtn = () => {
        if (!validator.isEmail(email)) {
            setEmailValid(false)
            return
        }
        setEmailValid(true)

        navigate(CHOSE_MOD_ROUTE)


    }

    return (
        <div className="main-container">
            <div className="interactive-content">
                <h1>Login</h1>
                <h4>See your growth</h4>
                <EmailRegisterField onChange={handleEmail} error={!emailValid}/>
                <PasswordLoginField onChange={handlePassword}/>
                <div className="btn-holder">
                    <AppButton onClick={handleLoginBtn} className="btn-app">Login</AppButton>
                </div>

                <h3>Not registered yet?
                    <NavLink to={REGISTER_ROUTE}>
                        <span>Create an Account</span>
                    </NavLink></h3>

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