import React from 'react'
import { IconCheck, IconX } from "@tabler/icons-react"
import { Box, Text } from "@mantine/core"


const PasswordRequirement = ({ meets, label }) => {
    return (
        <Text
            color={meets ? 'teal' : 'red'}
            sx={{ display: 'flex', alignItems: 'center' }}
            mt={7}
            size="sm"
        >
            {meets ? <IconCheck size="0.9rem"/> : <IconX size="0.9rem"/>} <Box ml={10}>{label}</Box>
        </Text>
    )
}

export default PasswordRequirement