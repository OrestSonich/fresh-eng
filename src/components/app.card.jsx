import React from 'react'
import '../styles/app.card.scss'

const AppCard = ({children}) => {
    return (
        <div className='card-main'>
            {children}
        </div>
    )
}

export default AppCard