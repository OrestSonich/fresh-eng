import React from 'react'
import { Avatar, Skeleton } from "@mantine/core"
import '../styles/pages/profile.page.scss'
import AppButton from "../components/app.ui/app.button"
import { PencilSimpleLine } from "@phosphor-icons/react"


const ProfilePage = () => {
    return (
        <div className="profile-container">
            <h1>My profile</h1>
            <section className="main-section">
                <Skeleton visible={false} circle height={100}>
                    <Avatar radius="xl" size="xl">OS</Avatar>
                </Skeleton>
                <div className="username">
                    <Skeleton visible={false} radius="xl">
                        <h3>Orest Sonich</h3>
                        <p>sonich.orest@gmail.com</p>
                    </Skeleton>
                </div>
                <AppButton className="edit-bnt">
                    <div>
                        <p>Edit</p>
                        <PencilSimpleLine size={41}/>
                    </div>
                </AppButton>
            </section>
            <Skeleton visible={false} radius="xl">
                <section className="info-section">
                    <div className="flex-info-main">
                        <h1>Personal information:</h1>
                        <AppButton className="edit-bnt">
                            <div>
                                <p>Edit</p>
                                <PencilSimpleLine size={41}/>
                            </div>
                        </AppButton>
                    </div>
                    <div className="flex-info-desc">
                        <div className="column">
                            <div className="pair-info">
                                <p className="p-title-desc">First Name:</p>
                                <p className="p-info">Orest</p>
                            </div>
                            <div className="pair-info">
                                <p className="p-title-desc">First Name:</p>
                                <p className="p-info">Orest</p>
                            </div>
                            <div className="pair-info">
                                <p className="p-title-desc">First Name:</p>
                                <p className="p-info">Orest</p>
                            </div>
                        </div>
                        <div className="column">
                            <div className="pair-info">
                                <p className="p-title-desc">First Name:</p>
                                <p className="p-info">Orest</p>
                            </div>
                            <div className="pair-info">
                                <p className="p-title-desc">First Name:</p>
                                <p className="p-info">Orest</p>
                            </div>
                            <div className="pair-info">
                                <p className="p-title-desc">First Name:</p>
                                <p className="p-info">Orest</p>
                            </div>
                        </div>
                    </div>
                </section>
            </Skeleton>
        </div>
    )
}

export default ProfilePage