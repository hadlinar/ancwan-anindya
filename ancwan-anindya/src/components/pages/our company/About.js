import React from 'react'
import { Carousel } from '3d-react-carousal'
import './About.css'
import { Row, Col } from 'react-bootstrap'
import { useTranslation } from "react-i18next";

let slides = [
    <img src={require(`../../../images/image-2.png`).default} alt=""/>,
    <img src={require(`../../../images/image-1.png`).default} alt=""/>,
    <img src={require(`../../../images/image-3.png`).default} alt=""/>
]

function About() {
    const { t } = useTranslation()

    return (
        <>
            <div className="slide">
                <Carousel slides={slides} arrows={true} />
            </div>
            <p className="desc-about-company">
                {t('desc_about_us')}
            </p>
            <Row className="detail-about">
                <Col>
                    <Row className="border-title-company"/>
                    <Row className="subtitle">
                        {t('vission')}
                    </Row>
                    <Row className="detail-text">
                        {t('vission_company')}
                    </Row>
                </Col>
                <Col  md={{ span: 1, offset: 0}}/>
                <Col>
                    <Row className="border-title-company"/>
                    <Row className="subtitle">
                        {t('mission')}
                    </Row>
                    <Row className="detail-text">
                        {t('mission_company')}
                    </Row>
                </Col>
            </Row>
            <Row >
                <Col>
                    <Row className="border-title-member"/>
                    <Row className="subtitle">
                        {t('membership')}
                    </Row>
                    <Row style={{margin:"auto"}}>
                        <Col>
                            <img src={require(`../../../images/apbi-icma.png`).default} alt="apbi-icma"/>,
                        </Col>
                        <Col>
                            <img src={require(`../../../images/aisi.png`).default} alt="aisi"/>,
                        </Col>
                        <Col>
                            <img src={require(`../../../images/fosfa-international.png`).default} alt="fosfa-international"/>,
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    )
}

export default About
