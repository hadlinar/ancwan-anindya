import React, { useState } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import './Navbar.css';
import logo from '../images/anindya-logo.png';
import logoWhite from '../images/anindya-logo-white.png';
import Toggle from '../components/Toggle'
import data from '../data';

function Navigation() {
    const [navbar, setNavbar] = useState(false);
    const [body, setBody] = useState(false);
    const [toggled, setToggled] = useState(false);

    const handleClick = () => {
        setToggled((t) => !t);
    }

    const changeBackground = () => {
        if(window.location.pathname === '/') {
            if(window.scrollY >= 70 && window.scrollY <= 680) {
                setNavbar(true);
                setBody(false);
            } else if (window.scrollY < 70) {
                setNavbar(false);
                setBody(false);
            } else {
                setNavbar(false);
                setBody(true);
            }
        } else {
            setNavbar(false);
            setBody(true);
        }
    }

    window.addEventListener('scroll', changeBackground);

    return (
        <>
            <Navbar expand="lg" collapseOnSelect className={navbar ? "navbar-light active" : [body ? "navbar-light-body" : "navbar-light"]}>
                <Navbar.Brand href="/"><img className="logo" src={navbar ? logoWhite : logo} alt="Anindya Logo"/></Navbar.Brand>
                <Navbar.Toggle />
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

export default Navigation
