import React, { useState, useEffect } from "react";
import "../../../App.css";
import "./HeroSection.css";
import { useTranslation } from "react-i18next";
import vid from "../../../videos/vpti-hero.mp4";

function HeroSection() {
  const { t } = useTranslation();
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    mobileVer();
  }, []);

  const mobileVer = () => {
    if (window.innerWidth <= 960) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  };

  window.addEventListener("resize", mobileVer);

  return mobile ? (
    <div className="hero-container-vpti-mobile">
      <h1>{t("anindya_tkdn")}</h1>
      <p>{t("sub_tkdn")}</p>
    </div>
  ) : (
    <div className="hero-container-vpti">
      <video src={vid} autoPlay loop muted />
      <h1>{t("anindya_tkdn")}</h1>
      <p>{t("sub_tkdn")}</p>
    </div>
  );
}

export default HeroSection;
