import React from "react";
import "./Definition.css";
import "./FAQ.css";
import { useTranslation } from "react-i18next";
import Accordion from "react-bootstrap/Accordion";
import Icon from "@mdi/react";
import { mdiChevronDown } from "@mdi/js";

function FAQ() {
  const { t } = useTranslation();

  const odd = [1, 3, 5, 7, 9];
  const even = [0, 2, 4, 6, 8];

  return (
    <>
      <div className="tkdn-container-definition">
        <div className="tkdn-section-header">
          <div className="border-title-vpti" />
          <h1 className="tkdn-section-title">{t("faq_title")}</h1>
        </div>
        <div>
          <Accordion className="faq-list">
            <div className="faq-half">
              {even.map((i) => (
                <Accordion.Item eventKey={i} key={i} className="faq-card">
                  <Accordion.Header className="faq-header">
                    <h3 className="tkdn-subtitle-2">
                      {t(`faq_list.${i}.title`)}
                    </h3>
                    <Icon path={mdiChevronDown} size={1} />
                  </Accordion.Header>
                  <Accordion.Body>{t(`faq_list.${i}.desc`)}</Accordion.Body>
                </Accordion.Item>
              ))}
            </div>
            <div className="faq-half">
              {odd.map((i) => (
                <Accordion.Item eventKey={i} key={i} className="faq-card">
                  <Accordion.Header className="faq-header">
                    <h3 className="tkdn-subtitle-2">
                      {t(`faq_list.${i}.title`)}
                    </h3>
                    <Icon path={mdiChevronDown} size={1} />
                  </Accordion.Header>
                  <Accordion.Body>{t(`faq_list.${i}.desc`)}</Accordion.Body>
                </Accordion.Item>
              ))}
            </div>
          </Accordion>
        </div>
      </div>
    </>
  );
}
export default FAQ;
