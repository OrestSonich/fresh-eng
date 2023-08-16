import React from 'react'
import { IconLock } from "@tabler/icons-react"
import { PasswordInput } from "@mantine/core"


const PasswordLoginField = ({ onChange }) => {


    const handlePassword = (event) => {
        const pass = event.target.value
        onChange(pass)
    }
    return (
        <PasswordInput
            placeholder="Password:"
            radius="md"
            size="xl"
            onChange={handlePassword}
            icon={<IconLock size="25"/>}
        />
    )
}

export default PasswordLoginField