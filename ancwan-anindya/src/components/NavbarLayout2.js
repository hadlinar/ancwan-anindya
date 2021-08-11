import React, { useState } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import './Navbar.css';
import logo from '../images/anindya-logo.png';
import Toggle from '../components/Toggle'
import data from '../data';

function Navigation2() {
    const [toggled, setToggled] = useState(false);

    const handleClick = () => {
        setToggled((t) => !t);
    }

    return (

        <>
            <Navbar collapseOnSelect className="navbar-light-body">
                <Navbar.Brand href="/"><img className="logo" src={logo} alt="Anindya Logo"/></Navbar.Brand>
                {/* <Navbar.Toggle /> */}
                <Navbar.Collapse >
                    <Nav className="ml-auto" activeKey={window.location.pathname}>
                        {data.navpath && data.navpath.map(item => {
                            return(
                                    <Nav.Link key={item.key} href={item.path} className="items">{item.name}</Nav.Link>
                                
                            ); 
                        })}
                        <Toggle toggled={toggled} onClick={handleClick} /> 
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            
        </>
    )
}

export default Navigation2