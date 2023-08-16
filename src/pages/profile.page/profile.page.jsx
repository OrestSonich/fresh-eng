import React, { useContext } from 'react'
import './profile.page.scss'
import { Context } from "../../index"
import { observer } from "mobx-react-lite"
import { Avatar, Skeleton } from "@mantine/core"
import { PencilSimpleLine } from "@phosphor-icons/react"
import AppButton from "../../components/app.ui/app.button/app.button"


const ProfilePage = () => {
    const { store } = useContext(Context)

    return (

        <div className="profile-container">
            <h1>My profile</h1>
            <section className="main-section">
                <Skeleton visible={false} circle height={100}>
                    <Avatar radius="xl" size="xl">{store.user.firstName ?
                        `${store.user.firstName.charAt(0)}${store.user.lastName.charAt(0)}`
                        : ""}</Avatar>
                </Skeleton>
                <div className="username">
                    <Skeleton visible={false} radius="xl">
                        <h3>{`${store.user.firstName} ${store.user.lastName}`}</h3>
                        <p>{store.user.email}</p>
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
                                <p className="p-info">{store.user.firstName}</p>
                            </div>
                            <div className="pair-info">
                                <p className="p-title-desc">Email:</p>
                                <p className="p-info">{store.user.email}</p>
                            </div>
                            <div className="pair-info">
                                <p className="p-title-desc">Rank:</p>
                                <p className="p-info">{store.user.rank}</p>
                            </div>
                        </div>
                        <div className="column">
                            <div className="pair-info">
                                <p className="p-title-desc">Last Name:</p>
                                <p className="p-info">{store.user.lastName}</p>
                            </div>
                            <div className="pair-info">
                                <p className="p-title-desc">Phone:</p>
                                <p className="p-info">{store.user.phoneNumber}</p>
                            </div>
                            <div className="pair-info">
                                <p className="p-title-desc">Registration Date:</p>
                                <p className="p-info">{store.user.registrationAt}</p>
                            </div>
                        </div>
                    </div>
                </section>
            </Skeleton>
        </div>
    )
}

export default observer(ProfilePage)