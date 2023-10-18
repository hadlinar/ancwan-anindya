import React, { useState, useEffect } from "react";
import data from "../../../data";
import "./StatutoryLaws.css";
import { Row, Col, Tab, Nav } from "react-bootstrap";
import { useTranslation } from "react-i18next";

function StatutoryLaws() {
  const { t } = useTranslation();
  const [mobile, setMobile] = useState(false);
  const [dropdownState, setDropdown] = useState("0");

  useEffect(() => {
    dropdownVPTI();
  }, []);

  const dropdownVPTI = () => {
    if (window.innerWidth <= 960) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  };

  window.addEventListener("resize", dropdownVPTI);

  return (
    <>
      <div className="tkdn-container-definition">
        <div className="tkdn-section-header">
          <div className="border-title-vpti" />
          <h1 className="tkdn-section-title">{t("statutory_title")}</h1>
        </div>
        <Tab.Container defaultActiveKey={1}>
          <Row>
            <Col sm={4} className="left-col-vpti">
              <Nav variant="pills">
                {Array.from(data.statutory_list, (tab, i) => {
                  return (
                    <Nav.Item className="nav_pills-vpti">
                      <Nav.Link eventKey={i + 1} className="name-tab-vpti">
                        {t(`statutory_list.${i}.tab_title`)}
                      </Nav.Link>
                    </Nav.Item>
                  );
                })}
              </Nav>
            </Col>
            <Col sm={8} className="right-col-tkdn">
              <Tab.Content>
                {Array.from(data.statutory_list, (tab, i) => {
                  return (
                    <Tab.Pane eventKey={i + 1}>
                      <div className="content-title">
                        {t(`statutory_list.${i}.tab_title`)}
                      </div>
                      {Array.from(tab.documents, (doc, id) => {
                        return (
                          <>
                            <li>
                              <a
                                href={doc.link}
                                target="_blank"
                                rel="noreferrer"
                              >
                                {t(`statutory_list.${i}.documents.${id}.name`)}
                              </a>
                            </li>
                          </>
                        );
                      })}
                    </Tab.Pane>
                  );
                })}
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    </>
  );
}

export default StatutoryLaws;
