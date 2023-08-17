import React, { useEffect, useState } from 'react'
import './library.page.scss'
import SegmentControlLibrary from "../../components/third-party.ui/segment.control.library"
import AppButton from "../../components/app.ui/app.button/app.button"
import { TextInput } from "@mantine/core"
import OptionsButton from "../../components/third-party.ui/options.button"
import { PlusCircle, TextAa } from "@phosphor-icons/react"
import AppCatalogPreviewCard from "../../components/app.ui/app.catalog.preview.card/app.catalog.preview.card"
import { useDisclosure } from "@mantine/hooks"
import AppCatalogActions from "../../components/app.ui/app.catalog.actions/app.catalog.actions"
import CatalogService from "../../services/CatalogService"



const LibraryPage = () => {

    const [ opened, { open, close } ] = useDisclosure(false)

    const [ catalogs, setCatalogs ] = useState([])

    useEffect(() => {
        const fetchCatalogs = async () => {
            const response = await CatalogService.fetchUserCatalogs()
            setCatalogs(response.data)
        }
        fetchCatalogs()
    }, [])

    return (
        <div className="library-container">
            <div className="switcher">
                <SegmentControlLibrary/>
            </div>
            <div className="controls">
                <div className="flex-col">
                    <AppButton className="new-catalog-btn">
                        <div onClick={open} className="flex items-center justify-center">
                            <PlusCircle className="mr-1" size={40}/>
                            <p>New catalog</p>
                        </div>
                    </AppButton>
                </div>
                <div className="flex-col">
                    <TextInput
                        rightSection={<TextAa size={32} opacity={0.4}/>}
                        className="mx-auto"
                        w={480}
                        size="lg"
                        placeholder="Find by name"
                    />
                </div>
                <div className="flex-opt">
                    <OptionsButton/>
                </div>
            </div>
            <hr/>
            <div className="catalogs-holder">
                {catalogs.map((el, key) => {
                    return <AppCatalogPreviewCard key={key} catalog={el}/>
                })
                }

            </div>
            <AppCatalogActions opened={opened}
                               onClose={close}
                               title={"Create new catalog"}
                               btnType={"create"}
            />
        </div>
    )
}

export default LibraryPage