import React from 'react'
import { Route, Routes } from "react-router-dom"
import { authRoutes, publicRoutes } from "../utils/routes"


const Routed = () => {
    const isAuth = true
    return (
        <Routes>
            {publicRoutes.map(({ path, component }) =>
                                  <Route key={path} path={path} Component={component}/>
            )}
            {isAuth && authRoutes.map(({ path, component }) =>
                                          <Route key={path} path={path} Component={component}/>
            )}
        </Routes>
    )
}

export default Routed