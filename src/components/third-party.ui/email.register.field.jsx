import React from 'react'
import { IconAt } from "@tabler/icons-react"
import { TextInput } from "@mantine/core"


const EmailRegisterField = () => {
    return (
        <TextInput
            label="Email address:"
            placeholder="Your email"
            size="xl"
            radius="md"
            className="mb-12"
            icon={<IconAt size="25"/>}/>
    )
}

export default EmailRegisterField