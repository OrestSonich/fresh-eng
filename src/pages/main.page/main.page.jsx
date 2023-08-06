import React from 'react'
import './main.page.scss'
import AppCard from "../../components/app.ui/app.card/app.card"
import AppPaginationsDots from "../../components/app.ui/app.paginations/app.paginations.dots"
import AppButton from "../../components/app.ui/app.button/app.button"
import { ArrowsClockwise } from '@phosphor-icons/react'


const MainPage = () => {
    return (
        <div>
            <div className="title-container">
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
                <div className="pagination-container">
                    <AppPaginationsDots count={3}/>
                </div>
            </div>
            <div className="benefits-container">
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
                    <AppButton className="started-btn">Get started</AppButton>
                </div>
            </div>
            <div className="modes-container">
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
            </div>
            <div className="for-teachers-container">
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
            </div>
        </div>
    )
}

export default MainPage