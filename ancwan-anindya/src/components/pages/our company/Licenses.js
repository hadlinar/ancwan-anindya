import React from 'react'
import { Row, Col, Tab, Nav } from 'react-bootstrap'
import './Licenses.css'
import data from '../../../data'
import { useTranslation } from "react-i18next";

function Licenses() {
    const { t } = useTranslation()

    return (
        <>
            <div>
                <div className="title-license">{t('licenses')}</div>
                <p className="title-desc">{t('licenses_desc')}</p>
                <div>
                    <Tab.Container id="left-tabs-example" defaultActiveKey={1}>
                        <Row  style={{backgroundColor: "#E0E0E0", border: "1px solid #E0E0E0"}}>
                            <Col sm={4} style={{paddingLeft: "0", paddingRight: "0"}}>
                                <Nav variant="pills" className="flex-column">
                                    <Nav.Item>
                                        <Nav.Link eventKey={1} className="name-tab">{t('licenses_tab1.name')}</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey={2} className="name-tab">{t('licenses_tab2.name')}</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey={3} className="name-tab">{t('licenses_tab3.name')}</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>
                            <Col sm={8} style={{paddingLeft: "0", paddingRight: "0"}}>
                            <Tab.Content className="license-content">
                                <Tab.Pane eventKey={1}>
                                    <div style={{fontWeight: "600"}}>{t('licenses_tab1.title')}</div>
                                    <ul className="list-content">
                                        {
                                            Array.from(data.licenses_tab1.val, (e, i) => {
                                            return(
                                                <li style={{paddingTop: "3px"}}>{t(`licenses_tab1.val.${i}`)}</li>
                                            )
                                        })}
                                    </ul>
                                </Tab.Pane>
                                <Tab.Pane eventKey={2}>
                                <div style={{fontWeight: "600"}}>{t('licenses_tab2.title')}</div>
                                    <ul className="list-content">
                                        {
                                            Array.from(data.licenses_tab2.val, (e, i) => {
                                            return(
                                                <li style={{paddingTop: "3px"}}>{t(`licenses_tab2.val.${i}`)}</li>
                                            )
                                        })}
                                    </ul>
                                </Tab.Pane>
                                <Tab.Pane eventKey={3}>
                                <div style={{fontWeight: "600"}}>{t('licenses_tab3.title')}</div>
                                    <ul className="list-content">
                                        {
                                            Array.from(data.licenses_tab3.val, (e, i) => {
                                            return(
                                                <li style={{paddingTop: "3px"}}>{t(`licenses_tab3.val.${i}`)}</li>
                                            )
                                        })}
                                    </ul>
                                </Tab.Pane>
                            </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                </div>
                <div className="title-license">{t('certification')}</div>
                <p className="title-desc">{t('certification_desc')}</p>
                <div>
                <Tab.Container id="left-tabs-example" defaultActiveKey={1}>
                        <Row  style={{backgroundColor: "#E0E0E0", border: "1px solid #E0E0E0"}}>
                            <Col sm={4} style={{paddingLeft: "0", paddingRight: "0"}}>
                                <Nav variant="pills" className="flex-column">
                                    <Nav.Item>
                                        <Nav.Link eventKey={1} className="certif-tab">{t('certification_tab1.name')}</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey={2} className="certif-tab">{t('certification_tab2.name')}</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>
                            <Col sm={8} style={{paddingLeft: "0", paddingRight: "0"}}>
                            <Tab.Content className="certif-content">
                                <Tab.Pane eventKey={1}>
                                    {
                                        Array.from(data.certification_tab1.desc, (e, i) => {
                                        return(
                                            <>
                                                <div style={{fontWeight: "600"}}>{t(`certification_tab1.desc.${i}.no`)}</div>
                                                <p className="certif-desc">{t(`certification_tab1.desc.${i}.detail`)}</p>
                                            </>
                                        )
                                    })}
                                        { Array.from(data.certification_tab1.val, (e, i) => {
                                            return(
                                                <p className="certif-list ">{t(`certification_tab1.val.${i}`)}</p>
                                            )
                                        })}
                                </Tab.Pane>
                                <Tab.Pane eventKey={2}>
                                {
                                        Array.from(data.certification_tab2.desc, (e, i) => {
                                        return(
                                            <>
                                                <div style={{fontWeight: "600"}}>{t(`certification_tab2.desc.${i}.no`)}</div>
                                                <p className="certif-desc">{t(`certification_tab2.desc.${i}.detail`)} <br/> {t(`certification_tab2.desc.${i}.detail2`)}</p>
                                            </>
                                        )
                                    })}
                                </Tab.Pane>
                            </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                </div>
            </div>
        </>
    )
}

export default Licenses
