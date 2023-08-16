import React from 'react'
import './main.page.scss'
import AppCard from "../../components/app.ui/app.card/app.card"
import AppButton from "../../components/app.ui/app.button/app.button"
import { ArrowsClockwise } from '@phosphor-icons/react'
import { NavLink } from "react-router-dom"
import { REGISTER_ROUTE } from "../../utils/variables/routes-consts"
import { observer } from "mobx-react-lite"
import AppCarousel from "../../components/app.ui/app.carousel/app.carousel"


const MainPage = () => {


    return (
        <div>
            <section className="title-container">
                <AppCarousel/>
            </section>
            <section className="benefits-container">
                <div className="flex-container">
                    <div className="card-contain">
                        <AppCard/>
                    </div>
                    <div className="text-container">
                        <h1>Start teach <br/>
                            dsadsadsad</h1>
                        <hr className="line"/>
                        <h3>h2 text information h2 text <br/>
                            information h2 text information</h3>
                        <h3>h2 text information h2 text <br/>
                            information h2 text information</h3>
                    </div>
                </div>
                <h1 className="benefits-ready">Ready to get new knowledge?</h1>
                <div className="btn-holder">
                    <NavLink to={REGISTER_ROUTE}>
                        <AppButton className="started-btn">Get started</AppButton>
                    </NavLink>
                </div>
            </section>
            <section className="modes-container">
                <h1>Three different learn mode</h1>
                <div className="cards-flex">
                    <AppCard className="down-card"></AppCard>
                    <AppCard></AppCard>
                    <AppCard className="down-card"></AppCard>
                </div>
                <div className="arrows-holder">
                    <ArrowsClockwise className="arrows-clock"
                                     size={120} color="#2C7DA0"
                                     weight="bold"
                    />
                </div>
            </section>
            <section className="for-teachers-container">
                <div className="flex-container">
                    <div className="text-container">
                        <h1>Start teach <br/>
                            dsadsadsad</h1>
                        <hr className="line"/>
                        <h3>h2 text information h2 text <br/>
                            information h2 text information</h3>
                        <h3>h2 text information h2 text <br/>
                            information h2 text information</h3>
                    </div>
                    <div className="card-contain">
                        <AppCard/>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default observer(MainPage)