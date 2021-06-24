import React, { useEffect } from 'react'
import './Clients.css'
import { Container, Row, Tabs, Tab } from 'react-bootstrap'
import data from '../../../data'
import Aos from 'aos'
import 'aos/dist/aos.css'

function Clients() {
    useEffect(() => {
        Aos.init({
            duration: 1000
        });
    }, [])

    return (
        <>
            <Container className="section-client">
                <div data-aos="fade-up">
                    <Row className="border-title-service" />
                    <Row className="row-title-clients">
                        <h1>Our Clients</h1>
                    </Row>

                    <Row>
                        <Tabs defaultActiveKey="Coal" id="controlled-tab-example" >
                            {data.clients && data.clients.map(item => {
                                return (
                                    <Tab eventKey={item.name} title={item.name} >
                                        <div>
                                            {item.img && item.img.map((item2, i) => {
                                                return (
                                                    <img className="clients" src={require(`../../../images/clients-dummy${i+1}.png`).default} alt={item2.img}  />
                                                )
                                            })}
                                        </div>
                                    </Tab>
                                )
                            })}
                        </Tabs>
                        
                    </Row>

                </div>
            </Container>  
        </>
    )
}

export default Clients
