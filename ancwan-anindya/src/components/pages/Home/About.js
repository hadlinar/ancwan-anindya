import React, { useEffect }  from 'react'
import data from '../../../data'
import './About.css'
import { Container, Row, Col } from 'react-bootstrap'
import Aos from 'aos'
import 'aos/dist/aos.css'
// import { useTranslation } from "react-i18next";

function About() {
    // const { t } = useTranslation()

    useEffect(() => {
        Aos.init({
            duration: 1000
        });
    }, [])

    return (
        <>
            <Container className="section-about">
                <div data-aos="fade-left" >
                    <Row>
                        <Col md={3}>
                            <Row className="border-title" />
                            <Row className="col-title-about">
                                {/* <h1>{t('about_anindya')}</h1> */}
                                <h1>About Anindya</h1>
                            </Row>
                        </Col>
                        <Col md={9}>
                            <Row className="col-desc-about">
                                <p>
                                    {/* {t('about')} */}
                                    {data.about}
                                </p>
                            </Row>
                            <Row className="col-desc-about">
                                <p>
                                    {/* {t('subabout')} */}
                                    {data.subabout}
                                </p>
                            </Row>
                            <Row className="col-val">

                                {data.values && data.values.map(item => {
                                    return (
                                        <Col className="values" key={item.key}>
                                            {item.val}
                                        </Col>
                                    )
                                })}
                            </Row>
                        </Col>
                    </Row>
                </div>
            </Container>
        </>
    )
}

export default About
