import React from 'react'
import data from '../../../data'
import { Row, Tabs, Tab } from 'react-bootstrap'
import About from './About'
import Branch from './Branch'
import Licenses from './Licenses'

function OurCompany() {
    return (
        <>
            <div style={{maxWidth: "1440px", padding: "80px", margin: "auto", textAlign: "center"}}>
                <h1>
                    {data.our_company}
                </h1>
                <Row style={{paddingTop: "80px"}}>
                    <Tabs defaultActiveKey="About Our Company" id="controlled-tab-example">
                        <Tab eventKey="About Our Company" title="About Our Company" >
                            <div>
                                <About />
                            </div>
                        </Tab>
                        <Tab eventKey="Indonesia Branches" title="Indonesia Branches" >
                            <div>
                                <Branch />
                            </div>
                        </Tab>
                        <Tab eventKey="Licenses & Certification" title="Licenses & Certification" >
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
