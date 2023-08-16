import React, { useState } from 'react'
import { Input, Modal } from "@mantine/core"
import { IMaskInput } from 'react-imask'
import { useId } from "@mantine/hooks"
import './app.modal.register.scss'
import AppButton from "../app.button/app.button"


const AppModalRegister = ({ opened, onClose, callback }) => {

    const [ userInfo, setUserInfo ] = useState({
                                                   firstName: '',
                                                   lastName: '',
                                                   phoneNumber: '',
                                               })
    const id = useId()

    const submitHandler = () => {
        callback(userInfo)
        onClose()
    }

    return (
        <Modal centered withCloseButton={false} size="lg" opened={opened} onClose={onClose}>
            <h1 className="modal-title">One more step</h1>
            <Input.Wrapper
                size="lg"
                mx="auto"
                maw="80%"
                label="Your details"
                mb={20}
                withAsterisk
            >
                <Input
                    size="md"
                    mt={10}
                    required
                    placeholder="Your name"
                    value={userInfo.firstName}
                    mb={20}
                    onChange={(event) => setUserInfo({
                                                         ...userInfo,
                                                         firstName: event.target.value
                                                     })}
                />
                <Input
                    size="md"
                    required
                    placeholder="Your surname"
                    value={userInfo.lastName}
                    onChange={(event) => setUserInfo({
                                                         ...userInfo,
                                                         lastName: event.target.value
                                                     })}
                />
            </Input.Wrapper>
            <Input.Wrapper size="lg"
                           mb={30} id={id}
                           label="Your phone"
                           maw="80%" mx="auto">
                <Input
                    mt={10}
                    size="md"
                    component={IMaskInput}
                    mask="+380 (00) 000-00-00"
                    id={id}
                    placeholder="Your phone"
                    value={userInfo.phoneNumber}
                    onChange={(event) => setUserInfo({
                                                         ...userInfo,
                                                         phoneNumber: event.target.value
                                                     })}
                />
            </Input.Wrapper>
            <div className="btn-cont">
                <AppButton onClick={submitHandler}>Sign Up</AppButton>
            </div>
        </Modal>
    )
}

export default AppModalRegister