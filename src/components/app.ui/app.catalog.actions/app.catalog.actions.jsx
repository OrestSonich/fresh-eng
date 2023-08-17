import React, { useState } from 'react'
import { Modal, Switch, TextInput } from "@mantine/core"
import AppButton from "../app.button/app.button"
import './app.catalog.actions.scss'
import CatalogService from "../../../services/CatalogService"
import { toast } from "react-hot-toast"


const AppCatalogActions = ({ opened, onClose, title, btnType }) => {

    const [ name, setName ] = useState("")
    const [ personal, setPersonal ] = useState(false)
    const submitHandler = () => {
        if (name !== "") {
            CatalogService.createCatalog(name, personal)
            onClose()
            toast.success(`catalog ${name} created!`)
        } else {
            toast.error("catalog must have name")
        }
    }

    const closeHandler = () => {
        setName("")
        setPersonal(false)
        onClose()
    }

    return (
        <Modal centered
               withCloseButton={false}
               opened={opened}
               onClose={onClose}
               size={630}
        >
            <div className="action-modal">
                <h1 className="text-3xl text-center mb-8">{title}</h1>
                <h2 className="text-2xl mb-4">Catalog name:</h2>
                <TextInput
                    className="mb-6"
                    size="lg"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <Switch
                    size="lg"
                    className="mb-28"
                    label="private catalog"
                    onChange={e => setPersonal(e.target.checked)}
                />
                <div className="end-btn">
                    <AppButton onClick={closeHandler} className="btn-cancel">cancel</AppButton>
                    <AppButton onClick={submitHandler} className="btn-create">{btnType}</AppButton>
                </div>
            </div>
        </Modal>
    )
}

export default AppCatalogActions