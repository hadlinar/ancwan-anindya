import React, { useEffect } from 'react'
import { useLocation } from "react-router-dom"
import HeroSection from './HeroSection'
import Flow from './Flow'
import Navigation from '../../Navbar';

function Vpti() {
    const { pathname } = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0);

    }, [pathname])

    return (
        <>  
            <Navigation />
            <HeroSection/>
            <div style={{backgroundColor: "white"}}>
                <div style={{maxWidth: "1440px", margin: "auto"}}>
                    <Flow/>
                </div>
            </div>
        </>
    )
}

export default Vpti
