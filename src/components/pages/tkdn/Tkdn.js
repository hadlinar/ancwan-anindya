import React, { useEffect } from 'react'
import { useLocation } from "react-router-dom"
import HeroSection from './HeroSectionTKDN'
import Navigation from '../../Navbar';
import Desc from './Desc';

function Tkdn() {
    const { pathname } = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0);

    }, [pathname])

    return (
        <>  
            <Navigation />
            <HeroSection/>
            <Desc />
            {/* <div style={{backgroundColor: "#F2F2F2"}}>
                <Flow/>
            </div>
            <Import /> */}
        </>
    )
}

export default Tkdn
