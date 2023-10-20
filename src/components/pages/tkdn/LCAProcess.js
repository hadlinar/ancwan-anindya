import React, { useState, useEffect } from "react";
import "./Definition.css";
import { useTranslation } from "react-i18next";

function LCAProcess() {
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
          <h1 className="tkdn-section-title">{t("lca_process_title")}</h1>
        </div>
        <img
          src={
            mobile
              ? require(`../../../images/TKDN/LCA Process-Mobile-${t(
                  "image_language"
                )}.png`).default
              : require(`../../../images/TKDN/LCA Process-Web-${t(
                  "image_language"
                )}.png`).default
          }
          alt={t("lca_process_title")}
        />
      </div>
    </>
  );
}
export default LCAProcess;
