import React, { useEffect } from 'react'
import './Clients.css'
import { Container, Row, Tabs, Tab, Col } from 'react-bootstrap'
import data from '../../../data'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useTranslation } from "react-i18next";

function Clients() {
    const { t } = useTranslation()

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
                        <h1>{t('our_client')}</h1>
                    </Row>

                    <Row>
                        <Tabs defaultActiveKey={1}>

                            {
                                Array.from(data.clients, (e, i) => {
                                    return (
                                        <Tab eventKey={i+1} title={t(`clients.${i}.name`)}>
                                            <Row style={{margin: "auto"}}>
                                                {e.img.map((pic, i) => {
                                                    return (
                                                        <Col key={i} style={{margin: "auto"}}>
                                                            <img className="clients" src={require(`../../../images/clients/${e.name}/${i+1} - ${pic.img} - ${e.name}.png`).default} alt={pic.img}  />
                                                        </Col>
                                                    )
                                                })}
                                            </Row>
                                        </Tab>
                                    )
                                })
                            }
                        </Tabs>
                        
                    </Row>

                </div>
            </Container>  
        </>
    )
}

export default Clients
