import React from 'react'
import HeroSection from './HeroSection'
import Flow from './Flow'
import Navigation from '../../Navbar';

function Vpti() {
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
