import React, { useState } from 'react'
import { Group, Modal, SimpleGrid, Text, Textarea, TextInput } from "@mantine/core"
import AppButton from "../app.button/app.button"
import './app.modal.feedback.scss'
import { isEmail, useForm } from "@mantine/form"
import { sendFeedback } from "../../../utils/emailSender"


const AppModalFeedback = ({ opened, close, callback }) => {

    const [ senderName, setSenderName ] = useState("")
    const [ subject, setSubject ] = useState("")
    const [ message, setMessage ] = useState("")

    const form = useForm({
                             initialValues: {
                                 email: '',
                             },

                             validate: {
                                 email: isEmail('Invalid email'),
                             },
                         })


    const submitHandle = () => {
        sendFeedback(senderName, form.getInputProps('email').value, subject, message)
        close()
        callback()
        setSenderName("")
        setSubject("")
        setMessage("")

    }

    return (
        <Modal opened={opened} onClose={close} size="50%" centered>
            <div className="modal-container">
                <form onSubmit={form.onSubmit((event) => {
                    submitHandle(event)
                })}>
                    <Text className="title-text"
                          fz="xl"
                          fw={700}>
                        Contact us
                    </Text>

                    <div className="form-container">
                        <SimpleGrid cols={2}
                                    breakpoints={[ { maxWidth: 'sm', cols: 1 } ]}>
                            <TextInput
                                onChange={(event) => setSenderName(event.target.value)}
                                size="md"
                                value={senderName}
                                label="Your name"
                                placeholder="Your name"/>
                            <TextInput
                                size="md"
                                label="Your email"
                                placeholder="your@email.com"
                                required
                                {...form.getInputProps('email')}
                            />
                        </SimpleGrid>

                        <TextInput
                            onChange={(event) => setSubject(event.target.value)}
                            value={subject}
                            data-autofocus
                            size="md"
                            mt="lg"
                            label="Subject"
                            placeholder="Subject"
                            required/>

                        <Textarea
                            onChange={(event) => setMessage(event.target.value)}
                            value={message}
                            size="md"
                            mt="lg"
                            label="Your message"
                            placeholder="Please include all relevant information"
                            minRows={3}
                        />

                        <Group position="right">
                            <AppButton type="submit"
                                       className="submit-button">send message</AppButton>
                        </Group>
                    </div>
                </form>
            </div>
        </Modal>
    )
}

export default AppModalFeedback