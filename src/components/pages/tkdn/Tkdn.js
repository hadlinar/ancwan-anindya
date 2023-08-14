import React, { useEffect } from 'react'
import { useLocation } from "react-router-dom"
import HeroSection from './HeroSectionTKDN'
import Navigation from '../../Navbar';
import Desc from './Desc';
import Definition from './Definition';
import Benefit from './Benefit';
import Statutory from './Statutory';

function Tkdn() {
    const { pathname } = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0);

    }, [pathname])

    return (
        <>  
            <Navigation />
            <HeroSection/>
            <div style={{backgroundColor: "#F2F2F2"}}>
                <Desc />
            </div>
            <Definition />
            <div style={{backgroundColor: "#F2F2F2"}}>
                <Benefit />
            </div>
            <Statutory />
        </>
    )
}

export default Tkdn
