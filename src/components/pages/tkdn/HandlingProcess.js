import React, { useState, useEffect } from "react";
import "./Definition.css";
import { useTranslation } from "react-i18next";

function HandlingProcess() {
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

  return (
    <>
      <div className="tkdn-container-definition">
        <div className="tkdn-section-header">
          <div className="border-title-vpti" />
          <h1 className="tkdn-section-title">{t("handling_process_title")}</h1>
        </div>
        <p className="tkdn-text">
          {t("handling_process_desc")}
          <a href="#complain-form">{t("complaint_link")}</a>
          {t("or_emailing")}
          <a href="mailto:keluhan_banding_TKDN@anindya.biz">
            keluhan_banding_TKDN@anindya.biz
          </a>
        </p>
        <h2 className="tkdn-subtitle">{t("complain_title")}</h2>
        <img
          src={
            mobile
              ? require(`../../../images/TKDN/Complaint-Mobile-${t(
                  "image_language"
                )}.png`).default
              : require(`../../../images/TKDN/Complaint-Web-${t(
                  "image_language"
                )}.png`).default
          }
          alt={t("complain_title")}
        />
        <h2 className="tkdn-subtitle">{t("appeal_title")}</h2>
        <img
          src={
            mobile
              ? require(`../../../images/TKDN/Appeal-Mobile-${t(
                  "image_language"
                )}.png`).default
              : require(`../../../images/TKDN/Appeal-Web-${t(
                  "image_language"
                )}.png`).default
          }
          alt={t("appeal_title")}
        />
      </div>
    </>
  );
}
export default HandlingProcess;
