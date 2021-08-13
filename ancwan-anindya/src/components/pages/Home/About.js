import React, { useEffect }  from 'react'
import data from '../../../data'
import './About.css'
import { Container, Row, Col } from 'react-bootstrap'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useTranslation } from "react-i18next";

function About() {
    const { t } = useTranslation()

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
                                <h1>{t('about_anindya')}</h1>
                            </Row>
                        </Col>
                        <Col md={9}>
                            <Row className="col-desc-about">
                                <p>
                                    {t('about')}
                                </p>
                            </Row>
                            <Row className="col-desc-about">
                                <p>
                                    {t('subabout')}
                                </p>
                            </Row>
                            <Row className="col-val">

                                {
                                    Array.from(data.values, (e, i) => {
                                        return (
                                            <Col className="values" key={i}>
                                                {t(`values.${i}.val`, { returnObjects: true })}
                                            </Col>
                                        )
                                    })
                                }
                            </Row>
                        </Col>
                    </Row>
                </div>
            </Container>
        </>
    )
}

export default About
