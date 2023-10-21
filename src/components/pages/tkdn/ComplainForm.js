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
        <Form>
          {mobile ? (
            <Row className="form-container">
              <Form.Group>
                <Form.Label>{t("submission_type_form")}</Form.Label>
                <Row className="submission-type-container">
                  {["complaint", "appeal"].map((type) => (
                    <Form.Check
                      type={"radio"}
                      name="typePicker"
                      id={type}
                      label={type}
                    />
                  ))}
                </Row>
              </Form.Group>
              <Form.Group className="input-container">
                <Form.Label>{t("company_name_form")}</Form.Label>
                <Form.Control as="input" />
              </Form.Group>
              <Form.Group className="input-container">
                <Form.Label>{t("company_pic_form")}</Form.Label>
                <Form.Control as="input" />
              </Form.Group>
              <Form.Group className="input-container">
                <Form.Label>{t("company_address_form")}</Form.Label>
                <Form.Control as="input" />
              </Form.Group>
              <Form.Group className="input-container">
                <Form.Label>{t("company_phone_form")}</Form.Label>
                <Form.Control as="input" type="number" />
              </Form.Group>
              <Form.Group className="input-container">
                <Form.Label>{t("details_form")}</Form.Label>
                <Form.Control as="textarea" rows={15} />
              </Form.Group>
              <Button
                buttonStyle="btn--primary"
                buttonSize="btn--xsmall"
                type="submit"
              >
                {t("button_form_submit")}
              </Button>
            </Row>
          ) : (
            <Row>
              <Col sm={4} className="form-container">
                <Form.Group onClick={(e) => handleSubmissionType(e)}>
                  <Form.Label>{t("submission_type_form")}</Form.Label>
                  <Row className="submission-type-container">
                    {["Complaint", "Appeal"].map((type) => (
                      <Form.Check
                        type={"radio"}
                        name="typePicker"
                        id={type}
                        label={type}
                      />
                    ))}
                  </Row>
                </Form.Group>
                <Form.Group
                  className="input-container"
                  onChange={(e) => handleName(e)}
                >
                  <Form.Label>{t("company_name_form")}</Form.Label>
                  <Form.Control as="input" />
                </Form.Group>
                <Form.Group
                  className="input-container"
                  onChange={(e) => handlePic(e)}
                >
                  <Form.Label>{t("company_pic_form")}</Form.Label>
                  <Form.Control as="input" />
                </Form.Group>
                <Form.Group
                  className="input-container"
                  onChange={(e) => handleAdress(e)}
                >
                  <Form.Label>{t("company_address_form")}</Form.Label>
                  <Form.Control as="input" />
                </Form.Group>
                <Form.Group
                  className="input-container"
                  onChange={(e) => handlePhone(e)}
                >
                  <Form.Label>{t("company_phone_form")}</Form.Label>
                  <Form.Control as="input" type="number" />
                </Form.Group>
                <Button
                  buttonStyle="btn--primary"
                  buttonSize="btn--xsmall"
                  onClick={handleSubmit}
                >
                  {t("button_form_submit")}
                </Button>
              </Col>
              <Col sm={8}>
                <Form.Group onChange={(e) => handleDetail(e)}>
                  <Form.Label>{t("details_form")}</Form.Label>
                  <Form.Control as="textarea" rows={15} />
                </Form.Group>
              </Col>
            </Row>
          )}
        </Form>
      </div>
    </>
  );
}
export default ComplainForm;
