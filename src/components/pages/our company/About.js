import React, { useState, useEffect } from 'react'
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
    const [mobile, setMobile] = useState(false)
    
    useEffect(() => {
        mobileVer();
    }, [])

    const mobileVer = () => {
        if (window.innerWidth <= 960) {
            setMobile(true)
        } else {
            setMobile(false)
        }
    }

    window.addEventListener('resize', mobileVer);

    return (
        <>
            {
                mobile ? 
                    <div className='container-about'>
                        <div className="slide">
                            <Carousel slides={
                                [
                                    <img src={require(`../../../images/image-2.png`).default} alt=""/>,
                                    <img src={require(`../../../images/image-1.png`).default} alt=""/>,
                                    <img src={require(`../../../images/image-3.png`).default} alt=""/>
                                ]
                            } arrows={false}/>
                        </div>
                        <div>
                            <p className="desc-about-company">
                                {t('desc_about_us')}
                            </p>
                        </div>
                        <div>
                            <div className="border-title-company"/>
                            <div className="subtitle">
                                {t('vission')}
                            </div>
                            <div className="detail-text">
                                {t('vission_company')}
                            </div>
                        </div>
                        <div style={{paddingTop: '30px'}}>
                            <div className="border-title-company"/>
                            <div className="subtitle">
                                {t('mission')}
                            </div>
                            <div className="detail-text">
                                {t('mission_company')}
                            </div>
                        </div>
                        <div style={{paddingTop: '30px'}}>
                            <div className="border-title-company"/>
                            <div className="subtitle">
                                {t('membership')}
                            </div>
                            <div className='about-pic-container-mobile'>
                                <img className='member-pic' src={require(`../../../images/apbi-icma.png`).default} alt="apbi-icma"/>
                                <img className='member-pic' src={require(`../../../images/aisi.png`).default} alt="aisi"/>
                                <img className='member-pic' src={require(`../../../images/fosfa-international.png`).default} alt="fosfa-international"/>
                            </div>
                        </div>
                    </div>
                :   
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
            }
        </>
    )
}

export default About
