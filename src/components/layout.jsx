import React from 'react'
import '../styles/layout.scss'


const Layout = ({ children }) => {
    return (
        <div className="app">
            {/*<AppNavbar/>*/}
            <div className="content">
                {children}
            </div>
            {/*<AppFooter/>*/}
        </div>
    )
}

export default Layout