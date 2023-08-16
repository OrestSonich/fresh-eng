import React from 'react'
import { Carousel } from "@mantine/carousel"
import AppCard from "../app.card/app.card"
import '../../../pages/main.page/main.page.scss'
import './app.carousel.scss'


const AppCarousel = () => {
    return (
        <Carousel
            maw="100%"
            mx="auto"
            align="center"
            loop
            draggable={false}
            className="carousel"
            withIndicators
            slideSize="100%"
            withControls={false}
            height="100%"
            speed={3}
        >
            <Carousel.Slide gap={70}>
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
            </Carousel.Slide>
            <Carousel.Slide gap={70}>
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
            </Carousel.Slide>
            <Carousel.Slide gap={70}>
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
            </Carousel.Slide>
        </Carousel>
    )
}

export default AppCarousel