import React, { useState } from 'react'
import { getPasswordStrength, requirements } from "../../utils/getPasswordStrenght"
import PasswordRequirement from "./password.requirement"
import { Box, PasswordInput, Popover, Progress } from "@mantine/core"


const PasswordRegisterField = () => {

    const [ passPopoverOpened, setPassPopoverOpened ] = useState(false)
    const [ passValue, setPassValue ] = useState('')

    const checks = requirements.map((requirement, index) => (
        <PasswordRequirement key={index} label={requirement.label} meets={requirement.re.test(passValue)}/>
    ))

    const strength = getPasswordStrength(passValue)
    const color = strength === 100 ? 'teal' : strength > 50 ? 'yellow' : 'red'

    return (
        <Box mx="auto">
            <Popover opened={passPopoverOpened} position="bottom" width="target"
                     transitionProps={{ transition: 'pop' }}>
                <Popover.Target>
                    <div
                        onFocusCapture={() => setPassPopoverOpened(true)}
                        onBlurCapture={() => setPassPopoverOpened(false)}
                    >
                        <PasswordInput
                            placeholder="Password"
                            size="xl"
                            radius="md"
                            label="Password:"
                            onChange={(event) =>
                                setPassValue(event.target.value)}
                        />
                    </div>
                </Popover.Target>
                <Popover.Dropdown>
                    <Progress color={color} value={strength} size={5} mb="xs"/>
                    <PasswordRequirement label="Includes at least 6 characters" meets={passValue.length > 5}/>
                    {checks}
                </Popover.Dropdown>
            </Popover>
        </Box>
    )
}

export default PasswordRegisterField