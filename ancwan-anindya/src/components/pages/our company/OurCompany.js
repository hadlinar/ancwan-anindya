import React, { useState, useEffect } from 'react'
import { Row, Tabs, Tab } from 'react-bootstrap'
import './OurCompany.css'
import About from './About'
import Branch from './Branch'
import Licenses from './Licenses'
import Navigation2 from '../../NavbarLayout2'
import { useTranslation } from "react-i18next"

function OurCompany() {
    const { t } = useTranslation()
    const [mobile, setMobile] = useState(false)
    const [dropdownState, setDropdown] = useState("0")

    var dropdownDict = [
        {
            "component": <About/>,
            "index": "0"
        },
        {
            "component": <Branch />,
            "index": "1"
        },
        {
            "component": <Licenses />,
            "index": "2"
        }
    ]

    var d = dropdownDict.find(x => x.index === dropdownState)
    
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
            <Navigation2/>
            <div className='our-company-container'>
                <h1>
                    {t('our_company')}
                </h1>
                {
                    mobile ? 
                        <Row style={{paddingTop: "40px"}}>
                            <div className='dropdown-container'>
                                <select
                                    className='custom-select'
                                    onChange={(e) => {
                                        const selectedClient = e.target.value
                                        setDropdown(selectedClient)
                                    }}
                                >
                                <option value={0}>{t('about_our_company')}</option> 
                                <option value={1}>{t('branches')}</option> 
                                <option value={2}>{t('licenses_tab')}</option> 
                                </select>
                                <div className='container-clients'>
                                    {d.component}
                                </div>
                            </div>
                        </Row>
                    : <Row style={{paddingTop: "80px"}}>
                        <Tabs defaultActiveKey={1} id="controlled-tab-example">
                            <Tab eventKey={1} title={t('about_our_company')} >
                                <div>
                                    <About />
                                </div>
                            </Tab>
                            <Tab eventKey={2} title={t('branches')} >
                                <div>
                                    <Branch />
                                </div>
                            </Tab>
                            <Tab eventKey={3} title={t('licenses_tab')} >
                                <div>
                                    <Licenses />
                                </div>
                            </Tab>
                        </Tabs>
                    </Row>
                }
            </div>
        </>
    )
}

export default OurCompany
