import React from 'react'
import { Row, Tabs, Tab } from 'react-bootstrap'
import About from './About'
import Branch from './Branch'
import Licenses from './Licenses'
import Navigation2 from '../../NavbarLayout2';
import { useTranslation } from "react-i18next";

function OurCompany() {
    const { t } = useTranslation()

    return (
        <>
            <Navigation2/>
            <div style={{maxWidth: "1340px", padding: "110px 80px 80px 80px", margin: "auto", textAlign: "center"}}>
                <h1>
                    {t('our_company')}
                </h1>
                <Row style={{paddingTop: "80px"}}>
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
            </div>
        </>
    )
}

export default OurCompany
