import React from 'react'
import { IconButton, Menu, MenuButton, MenuGroup, MenuItem, MenuList } from "@chakra-ui/react"
import { Sliders } from "@phosphor-icons/react"


const OptionsButton = () => {
    return (
        <Menu>
            <MenuButton
                boxSize={50}
                backgroundColor="white"
                as={IconButton}
                aria-label="Options"
                icon={<Sliders size={52}/>}

            />
            <MenuList>
                <MenuGroup fontSize={22} title="Filters">
                    <MenuItem>
                        from A to Z
                    </MenuItem>
                    <MenuItem>
                        from Z to A
                    </MenuItem>
                    <MenuItem>
                        by Date
                    </MenuItem>
                    <MenuItem>
                        by Date reverse
                    </MenuItem>
                </MenuGroup>
            </MenuList>
        </Menu>
    )
}

export default OptionsButton