import React from 'react'
import { IconLock } from "@tabler/icons-react"
import { PasswordInput } from "@mantine/core"


const PasswordLoginField = () => {
    return (
        <PasswordInput
            placeholder="Password:"
            radius="md"
            size="xl"
            icon={<IconLock size="25"/>}
        />
    )
}

export default PasswordLoginField