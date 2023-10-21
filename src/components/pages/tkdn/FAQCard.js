import React from "react";
import "./Definition.css";
import "./FAQ.css";
import Accordion from "react-bootstrap/Accordion";
import Icon from "@mdi/react";
import { mdiChevronDown } from "@mdi/js";

function FAQCard({ index, title, desc, url }) {
  return (
    <>
      <Accordion.Item eventKey={index} key={index} className="faq-card">
        <Accordion.Header className="faq-header">
          <h3 className="tkdn-subtitle-2">{title}</h3>
          <Icon path={mdiChevronDown} size={1} />
        </Accordion.Header>
        <Accordion.Body className="faq-content">
          {desc}
          <a href={url}>{url}</a>
        </Accordion.Body>
      </Accordion.Item>
    </>
  );
}
export default FAQCard;
