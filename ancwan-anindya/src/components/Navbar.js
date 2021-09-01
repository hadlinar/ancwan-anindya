import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../images/anindya-logo.png';
import logoWhite from '../images/anindya-logo-white.png';
import Toggle from '../components/Toggle'
import data from '../data';
import { useTranslation } from 'react-i18next'

function Navbar() {
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
  
  if (window.location.pathname === data.navpath[0].path) {
    console.log(data.navpath, " aaaa")
  } else {
    console.log(window.location.pathname)
  }

  return (
    <>
      <nav className={navbar ? 'navbar' : 'navbar active'}>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <img className="navbar-logo" src={navbar ? logoWhite : logo} alt="Anindya Logo"/>
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? [navbar ? 'fas fa-times' : 'fas fa-times active'] : [navbar ? 'fas fa-bars' : 'fas fa-bars active']} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                {   
                    Array.from(data.navpath, (e, i) => {
                        return (
                            <li className='nav-item'>
                                <Link key={i+1} to={e.path} className={window.location.pathname === data.navpath[i].path ? 'selected' : [ navbar ? 'nav-links' : 'nav-links active']} onClick={closeMobileMenu}>{t(`navpath.${i}.name`, { returnObjects: true })}</Link>
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

export default Navbar;
