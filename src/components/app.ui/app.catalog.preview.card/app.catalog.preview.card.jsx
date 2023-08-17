import React from 'react'
import './app.catalog.preview.card.scss'
import { UserCircle } from "@phosphor-icons/react"



const AppCatalogPreviewCard = ({ catalog }) => {
    return (
        <div className="catalog-card">
            <h1>{catalog.name}</h1>
            <hr/>
            <div className="flex-catalog-prev">
                <div className="main-cat-preview">
                    <h2>{catalog.cards.length} word</h2>
                    <div className="author">
                        <p>{catalog.creator}</p>
                        <UserCircle weight="light" size={40}/>
                    </div>
                </div>
                <div className="secondary-cat-preview">
                    <p>{catalog.personal ? "private" : "public"}</p>
                    <p>{catalog.createdAt}</p>
                </div>
            </div>
        </div>
    )
}

export default AppCatalogPreviewCard