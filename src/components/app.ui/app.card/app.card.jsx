import React from 'react'
import './app.card.scss'


const AppCard = ({ children, className }) => {
    return (
        <div className={className ? `card-main ${className}` : 'card-main'}>
            {children}
        </div>
    )
}

export default AppCard