import React, { useState, useEffect } from "react";
import "./Definition.css";
import "./FAQ.css";
import { useTranslation } from "react-i18next";
import data from "../../../data";
import Accordion from "react-bootstrap/Accordion";

function FAQ() {
  const { t } = useTranslation();

  return (
    <>
      <div className="tkdn-container-definition">
        <div className="tkdn-section-header">
          <div className="border-title-vpti" />
          <h1 className="tkdn-section-title">{t("faq_title")}</h1>
        </div>
        <div>
          <Accordion className="faq-list" defaultActiveKey={0} flush>
            {Array.from(data.faq_list, (faq, i) => {
              return (
                <Accordion.Item eventKey={i} key={i}>
                  <Accordion.Header className="faq-card">
                    <h3 className="tkdn-subtitle-2">
                      {t(`faq_list.${i}.title`)}
                    </h3>
                  </Accordion.Header>
                  <Accordion.Body className="faq-card">
                    {t(`faq_list.${i}.desc`)}
                  </Accordion.Body>
                </Accordion.Item>
              );
            })}
          </Accordion>
        </div>
      </div>
    </>
  );
}
export default FAQ;
