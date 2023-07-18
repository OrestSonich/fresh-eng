import React from 'react'
import '../styles/main.page.scss'
import AppCard from "../components/app.card"
import AppPaginationsDots from "../components/app.paginations.dots"
import AppButton from "../components/app.button"
const MainPage = () => {
    return (
        <div>
            <div className="title-container">
                <div className="flex-container">
                    <div className="text-container">
                        <h1>Start teach <br/>
                            dsadsadsad</h1>
                        <hr className='line'/>
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
                        <hr className='line'/>
                        <h3>h2 text information h2 text <br/>
                            information h2 text information</h3>
                        <h3>h2 text information h2 text <br/>
                            information h2 text information</h3>
                    </div>
                </div>
                <h1 className="benefits-ready">Ready to get new knowledge?</h1>
                <div className="btn-holder">
                    <AppButton className='started-btn'>Get started</AppButton>
                </div>
            </div>
        </div>
    )
}

export default MainPage