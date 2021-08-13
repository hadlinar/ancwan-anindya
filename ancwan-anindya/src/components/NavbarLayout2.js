import React, { useState } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import './Navbar.css';
import logo from '../images/anindya-logo.png';
import Toggle from '../components/Toggle'
import data from '../data';
import { useTranslation } from 'react-i18next'

function Navigation2() {
    const [toggled, setToggled] = useState(false);

    const { t, i18n } = useTranslation();

    const handleClick = () => {
        setToggled((t) => !t);

        if(toggled) {
            i18n.changeLanguage("id")
            localStorage.setItem('toggled', JSON.stringify(toggled))
        } else {
            i18n.changeLanguage("en")
            localStorage.setItem('toggled', JSON.stringify(toggled))
        }
    }

    return (

        <>
            <Navbar collapseOnSelect className="navbar-light-body">
                <Navbar.Brand href="/"><img className="logo" src={logo} alt="Anindya Logo"/></Navbar.Brand>
                {/* <Navbar.Toggle /> */}
                <Navbar.Collapse >
                    <Nav className="ml-auto" activeKey={window.location.pathname}>
                        {   
                            Array.from(data.navpath, (e, i) => {
                                return (
                                    <Nav.Link key={e.key} href={e.path} className="items">{t(`navpath.${i}.name`, { returnObjects: true })}</Nav.Link>
                                )
                            })
                            
                        }
                        <Toggle toggled={toggled} onClick={handleClick} /> 
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            
        </>
    )
}

export default Navigation2