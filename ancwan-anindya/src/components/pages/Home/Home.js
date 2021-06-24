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
            <About />
            <OurService />
            <Branch />
            <Clients />
        </>
    )
}

export default Home;