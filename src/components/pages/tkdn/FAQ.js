import React from "react";
import "./Definition.css";
import "./FAQ.css";
import { useTranslation } from "react-i18next";
import Accordion from "react-bootstrap/Accordion";
import FAQCard from "./FAQCard";

function FAQ() {
  const { t } = useTranslation();
  const half1 = [0, 1, 2, 3, 4];
  const half2 = [5, 6, 7, 8, 9];

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
              {half1.map((i) => (
                <FAQCard
                  index={i}
                  title={t(`faq_list.${i}.title`)}
                  desc={t(`faq_list.${i}.desc`)}
                />
              ))}
            </div>
            <div className="faq-half">
              {half2.map((i) => (
                <FAQCard
                  index={i}
                  title={t(`faq_list.${i}.title`)}
                  desc={t(`faq_list.${i}.desc`)}
                />
              ))}
            </div>
          </Accordion>
        </div>
      </div>
    </>
  );
}
export default FAQ;
