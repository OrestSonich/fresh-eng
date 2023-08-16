import React from 'react'
import './modal.confrim.scss'
import { Modal } from "@mantine/core"
import { Button } from "@chakra-ui/react"


const ModalConfirm = ({ opened, header, close, callback, children }) => {


    return (
        <Modal withCloseButton={false}
               className="confirm-contain"
               centered size="25%"
               opened={opened}
               onClose={close}>
            <h1>{header}</h1>
            {children}
            <div className="btn-container">
                <Button onClick={() => callback()} mr={4} width={24} colorScheme="gray">Yes</Button>
                <Button onClick={() => close()} width={24} colorScheme="teal">Cancel</Button>

            </div>
        </Modal>
    )
}

export default ModalConfirm