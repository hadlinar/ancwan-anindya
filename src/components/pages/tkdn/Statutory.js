import React, { useState, useEffect }  from 'react'
import { Row, Col, Tab, Nav } from 'react-bootstrap'
import './Statutory.css'
import data from '../../../data'
import { useTranslation } from "react-i18next";

function Statutory() {
    const { t } = useTranslation()
    const [mobile, setMobile] = useState(false)
    const [dropdownState, setDropdown] = useState("0")
    const [dropdownState1, setDropdown1] = useState("0")

    var dropdownDict = [
        {
            "component": data.licenses_tab1,
            "index": 1
        },
        {
            "component": data.licenses_tab2,
            "index": 2
        },
        {
            "component": data.licenses_tab3,
            "index": 3
        }
    ]

    useEffect(() => {
        dropdownService();
    }, [])

    const dropdownService = () => {
        if (window.innerWidth <= 960) {
            setMobile(true)
        } else {
            setMobile(false)
        }
    }

    window.addEventListener('resize', dropdownService);

    return (
        <>
            <div>
                <div className="title-license">{t('licenses')}</div>
                <p className="title-desc">{t('licenses_desc')}</p>
                <div>
                    {
                        mobile ? 
                            <div className='licenses-dropdown-container'>
                                <div className='dropdown-container'>
                                    <select
                                        className='custom-select'
                                        onChange={(e) => {
                                            const selectedClient = e.target.value
                                            setDropdown(selectedClient)
                                        }}
                                    >
                                        <option value={0}>{t('licenses_tab1.name')}</option> 
                                        <option value={1}>{t('licenses_tab2.name')}</option> 
                                        <option value={2}>{t('licenses_tab3.name')}</option> 
                                    </select>
                                    <div style={{backgroundColor: "#F2F2F2"}}>
                                        <div className='title-dropdown'>{t(`licenses_tab${parseInt(dropdownState)+1}.title`)}</div>
                                        <ul className="list-content">
                                            {
                                                Array.from(dropdownDict[parseInt(dropdownState)].component.val, (e, i) => {
                                                return(
                                                    <li className='list-dropdown'>{t(`licenses_tab${parseInt(dropdownState)+1}.val.${i}`)}</li>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                </div> 
                            </div>
                        : <Tab.Container defaultActiveKey={1}>
                            <Row>
                                <Col sm={4} className='left-col'>
                                    <Nav variant="pills" className="nav-left">
                                        <Nav.Item className='nav_pills'>
                                            <Nav.Link eventKey={1} className="name-tab">{t('licenses_tab1.name')}</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item className='nav_pills'>
                                            <Nav.Link eventKey={2} className="name-tab">{t('licenses_tab2.name')}</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item className='nav_pills'>
                                            <Nav.Link eventKey={3} className="name-tab">{t('licenses_tab3.name')}</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </Col>
                                <Col sm={8} className='right-col'>
                                    <Tab.Content className='content-right'>
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
                    }
                </div>
            </div>

            <div className='padding-accreditation'>
                <div className="title-license">{t('certification')}</div>
                <p className="title-desc">{t('certification_desc')}</p>
                <div>
                    {
                        mobile ? 
                        <div className='licenses-dropdown-container'>
                            <div className='dropdown-container'>
                                <select
                                    className='custom-select'
                                    onChange={(e) => {
                                        const selectedClient = e.target.value
                                        setDropdown1(selectedClient)
                                    }}
                                >
                                    <option value={0}>{t('certification_tab1.name')}</option>
                                    <option value={1}>{t('certification_tab2.name')}</option>
                                </select>
                                <div style={{backgroundColor: "#F2F2F2", paddingBottom: "5px"}}>
                                    <div style={{paddingTop: '25px'}}>
                                        {
                                            Array.from(dropdownDict1[parseInt(dropdownState1)].component.desc, (e, i) => {
                                            return(
                                                <>
                                                    <div className='title-certif'>{t(`certification_tab${parseInt(dropdownState1)+1}.desc.${i}.no`)}</div>
                                                    <p className="certif-desc">{t(`certification_tab${parseInt(dropdownState1)+1}.desc.${i}.detail`)}</p>
                                                </>
                                            )
                                        })}
                                        {
                                            dropdownState1 === "1" ? <div/> :
                                            Array.from(data.certification_tab1.val, (e, i) => {
                                                return(
                                                    <p className="certif-list ">{t(`certification_tab1.val.${i}`)}</p>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div> 
                        </div>
                        : <Tab.Container defaultActiveKey={1}>
                            <Row>
                                <Col sm={4} className='left-col-certif'>
                                    <Nav variant="pills" className="nav-left">
                                        <Nav.Item className='nav_pills_certif'>
                                            <Nav.Link eventKey={1} className="name-tab-certif">{t('certification_tab1.name')}</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item className='nav_pills_certif'>
                                            <Nav.Link eventKey={2} className="name-tab-certif">{t('certification_tab2.name')}</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </Col>
                                <Col sm={8} className='right-col'>
                                    <Tab.Content className='content-right'>
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
                    }
                </div>
            </div>
        </>
    )
}

export default Statutory
