import React, { useState, useEffect } from "react";
import "./Definition.css";
import { useTranslation } from "react-i18next";
import { Button, ButtonVPTI } from "../../Button";
import { Row, Col, Form } from "react-bootstrap";

function ComplainForm() {
  const { t } = useTranslation();

  return (
    <>
      <div className="tkdn-container-definition">
        <div className="tkdn-section-header">
          <div className="border-title-vpti" />
          <h1 className="tkdn-section-title">
            {t("complain_appeal_form_title")}
          </h1>
        </div>
        <Form>
          <Row>
            <Col sm={4}>
              <Form.Group>
                <Form.Label>{t("submission_type_form")}</Form.Label>
                <Row>
                  {["complaint", "appeal"].map((type) => (
                    <Form.Check type={"radio"} id={type} label={type} />
                  ))}
                </Row>
              </Form.Group>
              <Form.Group>
                <Form.Label>{t("company_name_form")}</Form.Label>
                <Form.Control as="input" />
              </Form.Group>
              <Form.Group>
                <Form.Label>{t("company_pic_form")}</Form.Label>
                <Form.Control as="input" />
              </Form.Group>
              <Form.Group>
                <Form.Label>{t("company_address_form")}</Form.Label>
                <Form.Control as="input" />
              </Form.Group>
              <Form.Group>
                <Form.Label>{t("company_phone_form")}</Form.Label>
                <Form.Control as="input" type="number" />
              </Form.Group>
              <Button
                buttonStyle="btn--primary"
                buttonSize="btn--xsmall"
                type="submit"
              >
                {t("button_form_submit")}
              </Button>
            </Col>
            <Col sm={8}>
              <Form.Group>
                <Form.Label>{t("company_name_form")}</Form.Label>
                <Form.Control as="textarea" rows={15} />
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </div>
    </>
  );
}
export default ComplainForm;
