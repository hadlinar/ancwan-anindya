import React, { useState, useEffect } from "react";
import "./Definition.css";
import "./Benefit.css";
import { useTranslation } from "react-i18next";
import data from "../../../data";

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
          {Array.from(data.benefit_tkdn_list, (benefit, i) => {
            return (
              <div className="tkdn-desc-flex tkdn-benefit">
                <img
                  src={
                    require(`../../../images/TKDN/Benefit/${benefit}.png`)
                      .default
                  }
                  alt={benefit}
                  className="tkdn-benefit-img"
                />
                <h2 className="tkdn-subtitle">
                  {t(`benefit_tkdn_list.${i}.title`)}
                </h2>
                <p className="tkdn-text">{t(`benefit_tkdn_list.${i}.desc`)}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
export default Benefit;
