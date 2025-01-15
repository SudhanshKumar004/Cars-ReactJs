import React from 'react'
import './Hero.css'
import videosource from './assets/bg2.webm'

const Hero = () =>{
    return(
        <>
        <div className="videocon">
            <video autoPlay loop muted className='bgvideo'>
                <source src={videosource} type='video/webm' />
            </video>
            <div className="content">
                <h1>Cars Exotica</h1>
                <p>We Sell Thrill</p>
            </div>
        </div>
        </>
    )
}

export default Hero