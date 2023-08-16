import React from 'react'
import './app.button.scss'


const AppButton = ({ className, children, type, onClick }) => {
    return (
        <button onClick={onClick} type={type} className={className ? `main ${className}` : 'main'}>{children}</button>
    )
}

export default AppButton