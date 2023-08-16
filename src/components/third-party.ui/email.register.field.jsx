import React from 'react'
import { IconAt } from "@tabler/icons-react"
import { TextInput } from "@mantine/core"


const EmailRegisterField = ({ onChange, error }) => {

    function handleEmailChange(event) {
        onChange(event.target.value)
    }

    return (

        <TextInput
            onChange={handleEmailChange}
            placeholder="Email address:"
            size="xl"
            radius="md"
            error={error}
            className="mb-12"
            icon={<IconAt size="25"/>}
        />
    )
}

export default EmailRegisterField