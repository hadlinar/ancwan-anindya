import React, { useEffect } from 'react'
import { useLocation } from "react-router-dom"
import HeroSection from './HeroSection'
import Flow from './Flow'
import Navigation from '../../Navbar';
import Import from './Import';
import Desc from './Desc';

function Vpti() {
    const { pathname } = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0);

    }, [pathname])

    return (
        <>  
            <Navigation />
            <HeroSection/>
            <Desc />
            <div style={{backgroundColor: "#F2F2F2"}}>
                <Flow/>
            </div>
            <Import />
        </>
    )
}

export default Vpti
