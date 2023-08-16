import React, { useState } from 'react'
import { Group, Modal, Text, Textarea } from "@mantine/core"
import AppButton from "../app.button/app.button"
import "./app.modal.report.scss"
import { reportProblem } from "../../../utils/emailSender"


const AppModalReport = ({ opened, close, callback }) => {
    const [ message, setMessage ] = useState("")


    const submitHandle = (e) => {
        e.preventDefault()
        reportProblem(message)
        close()
        callback()
        setMessage("")

    }
    return (
        <Modal opened={opened} onClose={close} size="55%" centered>

            <form onSubmit={(event) => submitHandle(event)}>
                <Text className="title-text"
                      fz="xl"
                      fw={700}>
                    Report a problem
                </Text>

                <div className="form-container">
                    <Textarea
                        onChange={(event) => setMessage(event.target.value)}
                        value={message}
                        size="md"
                        mt="lg"
                        label="Your problem"
                        placeholder="Please include all relevant information"
                        minRows={3}
                        required
                    />

                    <Group position="right">
                        <AppButton type="submit"
                                   className="submit-button">send message</AppButton>
                    </Group>
                </div>
            </form>
        </Modal>
    )
}

export default AppModalReport