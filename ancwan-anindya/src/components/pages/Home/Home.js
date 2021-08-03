import React from 'react';
import '../../../App.css'
import HeroSection from '../../HeroSection'
import About from './About'
import OurService from './OurService';
import Branch from './Branch';
import Clients from './Clients';

function Home () {

    return(
        <>
            <HeroSection />
            <div style={{maxWidth: "1440px", margin: "auto"}}>
                <About />
            </div>
            <div style={{backgroundColor: "#F2F2F2"}}>
                <OurService />
            </div>
                <Branch />
            <div style={{backgroundColor: "#F2F2F2"}}>
                <Clients />
            </div>
        </>
    )
}

export default Home;