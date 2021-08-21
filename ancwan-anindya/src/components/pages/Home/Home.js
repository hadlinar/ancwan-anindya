import React from 'react';
import '../../../App.css'
import Hero from '../../Hero'
import About from './About'
import OurService from './OurService';
import Branch from './Branch';
import Clients from './Clients';

import Navigation from '../../Navbar';

function Home () {

    return(
        <>
            <Navigation />
            <Hero />
            <div style={{backgroundColor: "white"}}>
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
            </div>
        </>
    )
}

export default Home;