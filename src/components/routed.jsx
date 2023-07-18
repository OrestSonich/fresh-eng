import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { authRoutes, publicRoutes } from "../utils/routes"


const Routed = () => {
    const isAuth = true;
    return (
        <BrowserRouter>
            <Routes>
                {publicRoutes.map(({path, component})=>
                    <Route key={path} path={path} Component={component}/>
                )}
                {isAuth && authRoutes.map(({path, component})=>
                    <Route key={path}  path={path} Component={component}/>
                )}
            </Routes>
        </BrowserRouter>
    )
}

export default Routed