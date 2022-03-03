import React from 'react'
import Offices from './Offices'
import Navigation2 from '../../NavbarLayout2';

function ContactUs() {
    return (
        <>
        <Navigation2/>
        <div style={{maxWidth: "1340px", margin: "auto", padding: "40px 0 0 0"}}>
            <Offices />
            </div>
            {/* <FormMessage /> */}
        </>
    )
}

export default ContactUs
