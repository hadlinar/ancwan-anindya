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
    dropdownTKDN();
  }, []);

  const dropdownTKDN = () => {
    if (window.innerWidth <= 960) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  };

  window.addEventListener("resize", dropdownTKDN);

  return (
    <>
      <div className="tkdn-container-definition">
        <div className="tkdn-section-header">
          <div className="border-title-vpti" />
          <h1 className="tkdn-section-title">{t("statutory_title")}</h1>
        </div>
        {mobile ? (
          <>
            <select
              className="custom-select"
              onChange={(e) => {
                const selectedClient = e.target.value;
                setDropdown(selectedClient);
              }}
            >
              {Array.from(data.statutory_list, (tab, i) => {
                return (
                  <option value={i}>
                    {t(`statutory_list.${i}.tab_title`)}
                  </option>
                );
              })}
            </select>
            <div className="container-tkdn-mobile">
              <h2 className="tkdn-subtitle">
                {t(`statutory_list.${parseInt(dropdownState)}.tab_title`)}
              </h2>
              <ol className="tkdn-list">
                {Array.from(
                  data.statutory_list[parseInt(dropdownState)].documents,
                  (doc, i) => {
                    return (
                      <>
                        <li>
                          <a href={doc.link} target="_blank" rel="noreferrer">
                            {t(
                              `statutory_list.${parseInt(
                                dropdownState
                              )}.documents.${i}.name`
                            )}
                          </a>
                        </li>
                      </>
                    );
                  }
                )}
              </ol>
            </div>
          </>
        ) : (
          <Tab.Container defaultActiveKey={1}>
            <Row>
              <Col sm={4} className="left-col-tkdn">
                <Nav variant="pills">
                  {Array.from(data.statutory_list, (tab, i) => {
                    return (
                      <Nav.Item className="nav_pills-tkdn">
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
                        <h2 className="tkdn-subtitle">
                          {t(`statutory_list.${i}.tab_title`)}
                        </h2>
                        <ol className="tkdn-list">
                          {Array.from(tab.documents, (doc, id) => {
                            return (
                              <>
                                <li>
                                  <a
                                    href={doc.link}
                                    target="_blank"
                                    rel="noreferrer"
                                  >
                                    {t(
                                      `statutory_list.${i}.documents.${id}.name`
                                    )}
                                  </a>
                                </li>
                              </>
                            );
                          })}
                        </ol>
                      </Tab.Pane>
                    );
                  })}
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        )}
      </div>
    </>
  );
}

export default StatutoryLaws;
