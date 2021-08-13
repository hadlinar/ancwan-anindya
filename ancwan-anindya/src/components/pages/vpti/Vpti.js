import React, { useEffect } from 'react'
import { useLocation } from "react-router-dom"
import HeroSection from './HeroSection'
import Flow from './Flow'
import Navigation from '../../Navbar';
import { useTranslation } from 'react-i18next'

function Vpti() {
    const { pathname } = useLocation()
    const { i18n } = useTranslation();

    useEffect(() => {
        window.scrollTo(0, 0);

        if(JSON.parse(localStorage.getItem('toggled')) === true) {
            i18n.changeLanguage("id")
        } else {
            i18n.changeLanguage("en")
        }

    }, [pathname, i18n])

    return (
        <>  
            <Navigation />
            <HeroSection/>
            <div style={{maxWidth: "1440px", margin: "auto"}}>
                <Flow/>
            </div>
        </>
    )
}

export default Vpti
