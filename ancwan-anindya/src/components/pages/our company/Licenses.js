import React from 'react'
import { Row, Col, Tab, Nav } from 'react-bootstrap'
import './Licenses.css'
import data from '../../../data'

function Licenses() {
    return (
        <>
            <div>
                <div className="title-license">{data.licenses}</div>
                <p className="title-desc">{data.licenses_desc}</p>
                <div>
                    <Tab.Container id="left-tabs-example" defaultActiveKey={data.licenses_tab1.name}>
                        <Row  style={{backgroundColor: "#E0E0E0", border: "1px solid #E0E0E0"}}>
                            <Col sm={4} style={{paddingLeft: "0", paddingRight: "0"}}>
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item>
                                    <Nav.Link eventKey={data.licenses_tab1.name} className="name-tab">{data.licenses_tab1.name}</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey={data.licenses_tab2.name} className="name-tab">{data.licenses_tab2.name}</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey={data.licenses_tab3.name} className="name-tab">{data.licenses_tab3.name}</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            </Col>
                            <Col sm={8} style={{paddingLeft: "0", paddingRight: "0"}}>
                            <Tab.Content className="license-content">
                                <Tab.Pane eventKey={data.licenses_tab1.name}>
                                    <div style={{fontWeight: "600"}}>{data.licenses_tab1.title}</div>
                                    <ul className="list-content">
                                        {data.licenses_tab1.val && data.licenses_tab1.val.map(item => {
                                            return(
                                                <li style={{paddingTop: "3px"}}>{item}</li>
                                            )
                                        })}
                                    </ul>
                                </Tab.Pane>
                                <Tab.Pane eventKey={data.licenses_tab2.name}>
                                <div style={{fontWeight: "600"}}>{data.licenses_tab2.title}</div>
                                    <ul className="list-content">
                                        {data.licenses_tab2.val && data.licenses_tab2.val.map(item => {
                                            return(
                                                <li style={{paddingTop: "3px"}}>{item}</li>
                                            )
                                        })}
                                    </ul>
                                </Tab.Pane>
                                <Tab.Pane eventKey={data.licenses_tab3.name}>
                                <div style={{fontWeight: "600"}}>{data.licenses_tab3.title}</div>
                                    <ul className="list-content">
                                        {data.licenses_tab3.val && data.licenses_tab3.val.map(item => {
                                            return(
                                                <li style={{paddingTop: "3px"}}>{item}</li>
                                            )
                                        })}
                                    </ul>
                                </Tab.Pane>
                            </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                </div>
                <div className="title-license">{data.certification}</div>
                <p className="title-desc">{data.certification_desc}</p>
                <div>
                <Tab.Container id="left-tabs-example" defaultActiveKey={data.certification_tab1.name}>
                        <Row  style={{backgroundColor: "#E0E0E0", border: "1px solid #E0E0E0"}}>
                            <Col sm={4} style={{paddingLeft: "0", paddingRight: "0"}}>
                                <Nav variant="pills" className="flex-column">
                                    <Nav.Item>
                                        <Nav.Link eventKey={data.certification_tab1.name} className="certif-tab">{data.certification_tab1.name}</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey={data.certification_tab2.name} className="certif-tab">{data.certification_tab2.name}</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>
                            <Col sm={8} style={{paddingLeft: "0", paddingRight: "0"}}>
                            <Tab.Content className="certif-content">
                                <Tab.Pane eventKey={data.certification_tab1.name}>
                                    {data.certification_tab1.desc && data.certification_tab1.desc.map(i => {
                                        return(
                                            <>
                                                <div style={{fontWeight: "600"}}>{i.no}</div>
                                                <p className="certif-desc">{i.detail}</p>
                                            </>
                                        )
                                    })}
                                        {data.certification_tab1.val && data.certification_tab1.val.map(item => {
                                            return(
                                                <p className="certif-list ">{item}</p>
                                            )
                                        })}
                                </Tab.Pane>
                                <Tab.Pane eventKey={data.certification_tab2.name}>
                                    {data.certification_tab2.desc && data.certification_tab2.desc.map(i => {
                                        return(
                                            <>
                                                <div style={{fontWeight: "600"}}>{i.no}</div>
                                                <p className="certif-desc">{i.detail}</p>
                                            </>
                                        )
                                    })}
                                        {data.certification_tab2.val && data.certification_tab2.val.map(item => {
                                            return(
                                                <p className="certif-list ">{item}</p>
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
