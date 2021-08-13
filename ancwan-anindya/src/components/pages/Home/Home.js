import React, { useEffect } from 'react';
import '../../../App.css'
import Hero from '../../Hero'
import About from './About'
import OurService from './OurService';
import Branch from './Branch';
import Clients from './Clients';

import Navigation from '../../Navbar';
import { useTranslation } from 'react-i18next'

function Home () {
    const { i18n } = useTranslation();

    useEffect(() => {
        if(JSON.parse(localStorage.getItem('toggled')) === true) {
            i18n.changeLanguage("id")
        } else {
            i18n.changeLanguage("en")
        }

    }, [i18n])

    return(
        <>
            <Navigation />
            <Hero />
            <div style={{maxWidth: "1440px", margin: "auto"}}>
                <About />
            </div>
            <div style={{backgroundColor: "#F2F2F2"}}>
                <OurService />
            </div>
            <div style={{maxWidth: "1440px", margin: "auto"}}>
                <Branch />
            </div>
            <div style={{backgroundColor: "#F2F2F2"}}>
                <Clients />
            </div>
        </>
    )
}

export default Home;