import React, { useState, useEffect } from "react";
import "./Definition.css";
import { useTranslation } from "react-i18next";
import complainProcessImg from "../../../images/TKDN/Complaint Handling.png";
import appealProcessImg from "../../../images/TKDN/Appeal Handling.png";

function HandlingProcess() {
  const { t } = useTranslation();

  return (
    <>
      <div className="tkdn-container-definition">
        <div className="tkdn-section-header">
          <div className="border-title-vpti" />
          <h1 className="tkdn-section-title">{t("handling_process_title")}</h1>
        </div>
        <p className="tkdn-text">{t("handling_process_desc")}</p>
        <h2 className="tkdn-subtitle">{t("complain_title")}</h2>
        <img src={complainProcessImg} />
        <h2 className="tkdn-subtitle">{t("appeal_title")}</h2>
        <img src={appealProcessImg} />
      </div>
    </>
  );
}
export default HandlingProcess;
