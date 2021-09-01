import React, { useEffect, useState } from 'react';
import './About.css';
import Aos from 'aos'
import 'aos/dist/aos.css'
import { Row, Col } from 'react-bootstrap'
import data from '../../../data'
import { useTranslation } from "react-i18next";

function About() {
    const { t } = useTranslation()
    const [mobile, setMobile] = useState(false)

    useEffect(() => {
        Aos.init({
            duration: 1000
        });
        rowAbout();
    }, [])

    const rowAbout = () => {
        if (window.innerWidth <= 960) {
            setMobile(true)
        } else {
            setMobile(false)
        }
    }

    window.addEventListener('resize', rowAbout);

    return (
        <div className='about'>
            <div data-aos="zoom-in-up">
                <Row>
                    {
                        mobile ? 
                        <Col md={12}>
                            <Row className="border-title" />
                            <Row className="col-title-about">
                                <h1>{t('about_anindya')}</h1>
                            </Row>
                            <Row>
                                <p className="col-desc-about">
                                {t('about')}<br/><br/>{t('subabout')}
                                </p>
                            </Row>
                            <Row className="col-val">

                                    {
                                        Array.from(data.values, (e, i) => {
                                            return (
                                                <Row className="values" key={i} md={12}>
                                                    {t(`values.${i}.val`, { returnObjects: true })}
                                                </Row>
                                            )
                                        })
                                    }
                                </Row>
                        </Col>
                        : <Row>
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
                    }
                </Row>
                    
            </div>
        </div>
    );
}

export default About

