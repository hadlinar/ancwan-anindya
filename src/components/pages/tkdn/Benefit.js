import React, { useState, useEffect } from "react";
import "./Definition.css";
import "./Benefit.css";
import { useTranslation } from "react-i18next";

function Benefit() {
  const { t } = useTranslation();
  const iterasiBenefit = [0, 1, 2, 3, 4, 5];
  return (
    <>
      <div className="tkdn-container-definition">
        <div className="tkdn-section-header">
          <div className="border-title-vpti" />
          <h1 className="tkdn-section-title">{t("benefit_tkdn_title")}</h1>
        </div>
        <div className="tkdn-desc-container">
          {iterasiBenefit.map((e) => (
            <div className="tkdn-desc-flex tkdn-benefit">
              {/* <img
                src={
                  require(`src/images/TKDN/Increase Tax Revenue.png`).default
                }
              ></img> */}
              <div className="tkdn-benefit-img" />
              <h2 className="tkdn-subtitle">
                {t(`benefit_tkdn_list.${e}.title`)}
              </h2>
              <p className="tkdn-text">{t(`benefit_tkdn_list.${e}.desc`)}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default Benefit;
