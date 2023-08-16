import React from 'react'
import { Modal } from "@mantine/core"
import "./app.modal.about.scss"


const AppModalAbout = ({ opened, close, callback }) => {
    return (
        <Modal opened={opened} onClose={close} size="55%" centered>
            <div className="about-container">
                <h1 className="title">FreshEng application</h1>
                <hr/>
                <div className="main-info">
                    FreshEng it`s easy and modern way to upgrade your language knowledge
                </div>
                <div className="secondary-info">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias at beatae culpa cupiditate eligendi,
                    explicabo facilis molestiae necessitatibus neque omnis, quo sapiente sit voluptatum. Doloribus eius
                    eveniet fuga obcaecati voluptatibus.
                </div>
                <div className="about-dev">
                    <h2>This application technology stack:</h2>
                    <p>Backend built on Java (Spring Boot) <br/> Database: PostgreSQL</p>
                    <p>Frontend on React, Mobx, Axios and different UI libraries</p>
                </div>
            </div>
        </Modal>
    )
}

export default AppModalAbout