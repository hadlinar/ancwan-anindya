import React from 'react';
import '../../../App.css'
import Hero from '../../Hero'
import About from './About'
import OurService from './OurService';
import Branch from './Branch';
import Clients from './Clients';

import Navigation from '../../Navbar';
import Footer from '../../Footer'

function Home () {

    return(
        <>
            <Navigation />
            <Hero />
            <About />
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