import React from "react";
import "./Definition.css";
import { useTranslation } from "react-i18next";
import { ButtonVPTI } from "../../Button";

function Impartiality() {
  const { t } = useTranslation();

  return (
    <>
      <div className="tkdn-container-definition">
        <div className="tkdn-section-header">
          <div className="border-title-vpti" />
          <h1 className="tkdn-section-title">{t("impartiality_title")}</h1>
        </div>
        <p>{t("impartiality_desc")}</p>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <ButtonVPTI
            className="btns"
            buttonStyle="btn--primary"
            buttonSize="btn--xsmall"
            pathn="https://drive.google.com/file/d/1iFePEsKc6ie0CFbkktYctUNCibPWHisZ/view"
          >
            {t("impartiality_button")}
          </ButtonVPTI>
        </div>
      </div>
    </>
  );
}
export default Impartiality;
