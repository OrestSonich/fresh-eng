import React from 'react'
import '../styles/pages/register.page.scss'
import AppButton from "../components/app.ui/app.button"
import PasswordRegisterField from "../components/third-party.ui/password.register.field"
import EmailRegisterField from "../components/third-party.ui/email.register.field"


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
                <h3>Already have an account?<span>Log In</span></h3>
            </div>
            <div className="decoration">
                <img src={require('../img/cards-with-logo.png')} alt="123"/>
                <h2>Fresh English: where <br/>
                    games and learning go <br/>
                    hand in hand!</h2>
                <hr/>
            </div>
        </div>
    )
}

export default RegisterPage