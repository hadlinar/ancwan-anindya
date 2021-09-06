import React, { useEffect, useState } from 'react'
import './Clients.css'
import { Container, Row, Tabs, Tab, Col } from 'react-bootstrap'
import data from '../../../data'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useTranslation } from "react-i18next";

function Clients() {
    const { t } = useTranslation()
    const [mobile, setMobile] = useState(false)
    const [dropdownState, setDropdown] = useState("0")

    var d = data.clients.filter(x => x.index === dropdownState)

    useEffect(() => {
        Aos.init({
            duration: 1000
        });
    }, [])

    const dropdownClient = () => {
        if (window.innerWidth <= 960) {
            setMobile(true)
        } else {
            setMobile(false)
        }
    }

    useEffect(() => {
        dropdownClient();
    }, []);

    window.addEventListener('resize', dropdownClient);

    return (
        <>
            <Container className="section-client">
                <div data-aos="fade-up">
                    <Row className="border-title-service" />
                    <Row className="row-title-clients">
                        <h1>{t('our_client')}</h1>
                    </Row>

                    <Row>
                        {
                            mobile ? 
                            <>
                                <div className='dropdown-container'>
                                    <select
                                        className='custom-select'
                                        onChange={(e) => {
                                            const selectedClient = e.target.value
                                            setDropdown(selectedClient)
                                        }}
                                    >
                                        {
                                            Array.from(data.clients, (e,i) => {
                                                return (
                                                    <option value={t(`clients.${i}.index`)}>{t(`clients.${i}.name`)}</option>
                                                )
                                            })
                                        }
                                    </select>
                                    <div className='container-clients'>
                                        {
                                            Array.from(d, e => {
                                                return (
                                                    Array.from(e.img, (pic, i) => {
                                                        return (
                                                            <Row style={{margin: "auto"}}>
                                                                 <Col key={i} style={{margin: "auto"}}>
                                                                {
                                                                    pic !== "LV" ? <img className="clients" src={require(`../../../images/clients/${e.name}/${pic}.png`).default} alt={pic}  />
                                                                    : 
                                                                    <img className="clients-lv" src={require(`../../../images/clients/${e.name}/${pic}.png`).default} alt={pic}  />
                                                                }
                                                                 </Col>
                                                             </Row>
                                                        )
                                                    })
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </>
                            : <Tabs defaultActiveKey={1}>
                                {
                                    Array.from(data.clients, (e, i) => {
                                        return (
                                            <Tab eventKey={i+1} title={t(`clients.${i}.name`)}>
                                                <Row style={{margin: "auto"}}>
                                                    {e.img.map((pic, i) => {
                                                        return (
                                                            <Col key={i} style={{margin: "auto"}}>
                                                                {
                                                                    pic !== "LV" ? <img className="clients" src={require(`../../../images/clients/${e.name}/${pic}.png`).default} alt={pic}  />
                                                                    : 
                                                                    <img className="clients-lv" src={require(`../../../images/clients/${e.name}/${pic}.png`).default} alt={pic}  />
                                                                }
                                                            </Col>
                                                        )
                                                    })}
                                                </Row>
                                            </Tab>
                                        )
                                    })
                                }
                            </Tabs>
                        }
                    </Row>

                </div>
            </Container>  
        </>
    )
}

export default Clients