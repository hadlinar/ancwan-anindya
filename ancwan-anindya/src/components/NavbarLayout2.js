// import React, { useState } from 'react';
// import { Nav, Navbar } from 'react-bootstrap';
// import './Navbar.css';
// import logo from '../images/anindya-logo.png';
// import Toggle from '../components/Toggle'
// import data from '../data';
// import { useTranslation } from 'react-i18next'

// function Navigation2() {
//     const [toggled, setToggled] = useState(false);

//     const { t, i18n } = useTranslation();

//     const handleClick = () => {
//         setToggled((t) => !t);

//         if(toggled) {
//             i18n.changeLanguage("id")
//             localStorage.setItem('language', 'id')
//             localStorage.setItem('toggled', JSON.stringify(toggled))
//         } else {
//             i18n.changeLanguage("en")
//             localStorage.setItem('language', 'en')
//             localStorage.setItem('toggled', JSON.stringify(toggled))
//         }
//     }

//     return (

//         <>
//             <Navbar collapseOnSelect className="navbar-light-body">
//                 <Navbar.Brand href="/"><img className="logo" src={logo} alt="Anindya Logo"/></Navbar.Brand>
//                 <Navbar.Collapse >
//                     <Nav className="ml-auto" activeKey={window.location.pathname}>
//                         {   
//                             Array.from(data.navpath, (e, i) => {
//                                 return (
//                                     <Nav.Link key={e.key} href={e.path} className="items">{t(`navpath.${i}.name`, { returnObjects: true })}</Nav.Link>
//                                 )
//                             })
                            
//                         }
//                         <Toggle toggled={toggled} onClick={handleClick} /> 
//                     </Nav>
//                 </Navbar.Collapse>
//             </Navbar>
            
//         </>
//     )
// }

// export default Navigation2

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../images/anindya-logo.png';
import logoWhite from '../images/anindya-logo-white.png';
import Toggle from '../components/Toggle'
import data from '../data';
import { useTranslation } from 'react-i18next'

function Navbar2() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const [navbar, setNavbar] = useState(true);
    const [body, setBody] = useState(false);
    const [toggled, setToggled] = useState(false);

    const { t, i18n } = useTranslation();

    const handleClickLan = () => {
        setToggled((t) => !t);

        if(toggled) {
            i18n.changeLanguage("id")
            localStorage.setItem('language', 'id')
            localStorage.setItem('toggled', JSON.stringify(toggled))
        } else {
            i18n.changeLanguage("en")
            localStorage.setItem('language', 'en')
            localStorage.setItem('toggled', JSON.stringify(toggled))
        }
    }

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };


    const changeBackground = () => {
        if(window.scrollY > 680) {
            setNavbar(false);
            setBody(true);
        }  else {
            setNavbar(true);
            setBody(true);
        }
    }

    window.addEventListener('scroll', changeBackground);

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar active'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <img className="navbar-logo" src={logo} alt="Anindya Logo"/>
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times active' : 'fas fa-bars active'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                {   
                    Array.from(data.navpath, (e, i) => {
                        return (
                            <li className='nav-item'>
                                <Link key={i+1} to={e.path} className={window.location.pathname === data.navpath[i].path ? 'selected' : 'nav-links active'} onClick={closeMobileMenu}>{t(`navpath.${i}.name`, { returnObjects: true })}</Link>
                            </li>
                        )
                    })
                    
                }
                <li className='nav-item-toggle'>
                    <Toggle toggled={toggled} onClick={handleClickLan} /> 
                </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar2;
