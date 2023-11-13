import React, { useState, useEffect } from "react";
import "./Definition.css";
import "./ComplainForm.css";
import { useTranslation } from "react-i18next";
import { Button } from "../../Button";
import { Row, Col, Form } from "react-bootstrap";

function ComplainForm() {
  const { t } = useTranslation();
  const [mobile, setMobile] = useState(false);

  const [submissionType, setSubmissionType] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyPic, setCompanyPic] = useState("");
  const [companyAddress, setCompanyAddress] = useState("");
  const [companyPhone, setCompanyPhone] = useState("");
  const [detailSubmission, setDetailSubmission] = useState("");

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

  const handleSubmissionType = (e) => {
    setSubmissionType(e.target.id);
  };

  const handleName = (e) => {
    setCompanyName(e.target.value);
  };

  const handlePic = (e) => {
    setCompanyPic(e.target.value);
  };

  const handleAdress = (e) => {
    setCompanyAddress(e.target.value);
  };

  const handlePhone = (e) => {
    setCompanyPhone(e.target.value);
  };

  const handleDetail = (e) => {
    setDetailSubmission(e.target.value);
  };

  const handleSubmit = () => {
    const dataToSend = {
      submissionType: submissionType,
      companyName: companyName,
      companyPic: companyPic,
      companyAddress: companyAddress,
      companyPhone: companyPhone,
      detailSubmission: detailSubmission,
    };

    console.log(JSON.stringify(dataToSend));
  };

  window.addEventListener("resize", mobileVer);
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
