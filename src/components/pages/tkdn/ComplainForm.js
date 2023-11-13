import "./Definition.css";
import "./ComplainForm.css";
import { useTranslation } from "react-i18next";

function ComplainForm() {
  const { t } = useTranslation();

  return (
    <>
      <div className="tkdn-container-definition" id="complain-form">
        <div className="tkdn-section-header">
          <div className="border-title-vpti" />
          <h1 className="tkdn-section-title">
            {t("complain_appeal_form_title")}
          </h1>
        </div>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSfmATagyIowKwrZufFL9mOIrsgl1pScCDpLn0XnDdMUI7u9Ww/viewform?embedded=true"
          width="100%"
          height="1300px"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >
          Loading…
        </iframe>
      </div>
    </>
  );
}
export default ComplainForm;
