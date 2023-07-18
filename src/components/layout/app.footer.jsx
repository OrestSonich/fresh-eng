import React from 'react'
import '../../styles/layout/footer.scss'
import { GithubLogo, InstagramLogo, LinkedinLogo, TelegramLogo } from "@phosphor-icons/react"


const AppFooter = () => {
    return (
        <footer>
            <div className="container">
                <div className="reports">
                    <p>report a problem</p>
                    <p>about us</p>
                    <p>contact us</p>
                </div>
                <div className="socials">
                    <a href="https://www.instagram.com/orest_sonich/" target="_blank"><InstagramLogo size={45}/></a>
                    <a href="https://github.com/OrestSonich" target="_blank"><GithubLogo size={45}/></a>
                    <a href="https://www.linkedin.com/in/orest-sonich-80463b26b/" target="_blank"><LinkedinLogo
                        size={45}/></a>
                    <a href="https://t.me/sonichorest" target="_blank"><TelegramLogo size={45}/></a>
                </div>
                <p className="copyright">fresheng pet project || Developed By: Orest Sonich</p>
            </div>
        </footer>
    )
}

export default AppFooter