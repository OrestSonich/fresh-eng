import React, { useContext, useState } from 'react'
import './auth.page.scss'
import AppButton from "../../components/app.ui/app.button/app.button"
import PasswordRegisterField from "../../components/third-party.ui/password.register.field"
import EmailRegisterField from "../../components/third-party.ui/email.register.field"
import { NavLink, useNavigate } from "react-router-dom"
import { CHOSE_MOD_ROUTE, LOGIN_ROUTE } from "../../utils/variables/routes-consts"
import { Context } from "../../index"
import { observer } from "mobx-react-lite"
import { useDisclosure } from "@mantine/hooks"
import AppModalRegister from "../../components/app.ui/app.modal.register/app.modal.register"
import validator from "validator"
import { getPasswordStrength } from "../../utils/getPasswordStrenght"
import { toast } from "react-hot-toast"


const RegisterPage = () => {

    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")
    const [ emailValid, setEmailValid ] = useState(true)
    const navigate = useNavigate()
    const [ opened, { open, close } ] = useDisclosure(false)


    const { store } = useContext(Context)

    let user = {}
    const handleEmail = (email) => {
        setEmail(email)
    }
    const handlePassword = (password) => {
        setPassword(password)
    }

    const handleSignUpBtn = () => {
        if (!validator.isEmail(email)) {
            setEmailValid(false)
            return
        }

        setEmailValid(true)

        const strength = getPasswordStrength(password)
        if (strength > 80) {
            open()
        }
    }

    const modalSignUpBtnHandler = (userInfo) => {
        user = userInfo
        store.register(email,
                       password,
                       user.phoneNumber,
                       user.firstName,
                       user.lastName
        )
        navigate(CHOSE_MOD_ROUTE)
        toast.success('You are successfully sign up!')
    }

    return (
        <div className="main-container">
            <div className="interactive-content">
                <h1>Let's Freshen up your <br/>
                    English skills</h1>
                <h4>Get started - it`s free.</h4>
                <EmailRegisterField
                    onChange={handleEmail} error={!emailValid}/>
                <PasswordRegisterField
                    onChange={handlePassword}/>
                <div className="btn-holder">
                    <AppButton
                        onClick={handleSignUpBtn}
                        className="btn-app">
                        Sign Up
                    </AppButton>
                </div>

                <h3>Already have an account?
                    <NavLink to={LOGIN_ROUTE}>
                        <span>Log In</span>
                    </NavLink>
                </h3>

            </div>
            <div className="decoration">
                <img src={require('../../img/cards-with-logo.png')} alt="123"/>
                <h2>Fresh English: where <br/>
                    games and learning go <br/>
                    hand in hand!</h2>
                <hr/>
            </div>
            <AppModalRegister callback={modalSignUpBtnHandler} opened={opened} onClose={close}></AppModalRegister>
        </div>
    )
}

export default observer(RegisterPage)