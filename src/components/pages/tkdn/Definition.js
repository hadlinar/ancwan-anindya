import React from "react";
import "./Definition.css";
import { useTranslation } from "react-i18next";

function Definition() {
  const { t } = useTranslation();

  return (
    <>
      <div className="tkdn-container-definition">
        <div className="tkdn-section-header">
          <div className="border-title-vpti" />
          <h1 className="tkdn-section-title">{t("definition_tkdn")}</h1>
        </div>
        <div className="tkdn-desc-container">
          <div className="tkdn-desc-flex">
            <h2 className="tkdn-subtitle">{t("domestic_title")}</h2>
            <p className="tkdn-text"> {t("domestic_desc")}</p>
          </div>
          <div className="tkdn-desc-flex">
            <h2 className="tkdn-subtitle">{t("local_title")}</h2>
            <p className="tkdn-text">{t("local_desc")}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Definition;
