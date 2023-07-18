import React from 'react'
import '../../styles/app.ui/app.button.scss'


const AppButton = ({ className, children }) => {
    return (
        <button className={className ? `main ${className}` : 'main'}>{children}</button>
    )
}

export default AppButton