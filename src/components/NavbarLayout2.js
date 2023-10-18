import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../images/anindya-logo.png";
import Toggle from "../components/Toggle";
import data from "../data";
import { useTranslation } from "react-i18next";

function Navbar2() {
  const [click, setClick] = useState(false);
  const [toggled, setToggled] = useState(false);

  const { t, i18n } = useTranslation();

  const handleClickLan = () => {
    setToggled((t) => !t);

    if (toggled) {
      i18n.changeLanguage("id");
      localStorage.setItem("language", "id");
      localStorage.setItem("toggled", JSON.stringify(toggled));
    } else {
      i18n.changeLanguage("en");
      localStorage.setItem("language", "en");
      localStorage.setItem("toggled", JSON.stringify(toggled));
    }
  };

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar active">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <img className="navbar-logo" src={logo} alt="Anindya Logo" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i
              className={click ? "fas fa-times active" : "fas fa-bars active"}
            />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            {Array.from(data.navpath, (e, i) => {
              return (
                <li className="nav-item">
                  <Link
                    key={i + 1}
                    to={e.path}
                    className={
                      window.location.pathname === data.navpath[i].path
                        ? "selected"
                        : "nav-links active"
                    }
                    onClick={closeMobileMenu}
                  >
                    {t(`navpath.${i}.name`, { returnObjects: true })}
                  </Link>
                </li>
              );
            })}
            <li className="nav-item-toggle">
              <Toggle toggled={toggled} onClick={handleClickLan} />
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar2;
