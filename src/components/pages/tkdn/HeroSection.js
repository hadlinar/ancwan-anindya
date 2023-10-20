import React from "react";
import "../../../App.css";
import "./HeroSection.css";
import { useTranslation } from "react-i18next";
import { ButtonVPTI } from "../../Button";

function HeroSection() {
  const { t } = useTranslation();

  return (
    <div className="hero-container-tkdn-mobile">
      <h1>{t("anindya_tkdn")}</h1>
      <p>{t("sub_tkdn")}</p>
      <ButtonVPTI
        className="btns"
        buttonStyle="btn--primary"
        buttonSize="btn--xsmall"
        pathn="https://avs.anindya.biz/"
      >
        AVS TKDN
      </ButtonVPTI>
    </div>
  );
}

export default HeroSection;
