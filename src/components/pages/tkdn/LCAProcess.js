import React, { useState, useEffect } from "react";
import "./Definition.css";
import { useTranslation } from "react-i18next";
import lcaProcessImg from "../../../images/TKDN/LCA Verification Process.png";

function LCAProcess() {
  const { t } = useTranslation();

  return (
    <>
      <div className="tkdn-container-definition">
        <div className="tkdn-section-header">
          <div className="border-title-vpti" />
          <h1 className="tkdn-section-title">{t("lca_process_title")}</h1>
        </div>
        <img src={lcaProcessImg} />
      </div>
    </>
  );
}
export default LCAProcess;
