import React from 'react'
import { Carousel } from '3d-react-carousal'
import './About.css'
import { Row, Col } from 'react-bootstrap'
import data from '../../../data'

let slides = [
    <img src={require(`../../../images/image-2.png`).default} alt=""/>,
    <img src={require(`../../../images/image-1.png`).default} alt=""/>,
    <img src={require(`../../../images/image-1.png`).default} alt=""/>
]

function About() {
    return (
        <>
            <div className="slide">
                <Carousel slides={slides} arrows={true} />
            </div>
            <p className="desc-about-company">
                {data.about_company}
            </p>
            <Row className="detail-about">
                <Col>
                    <Row className="border-title-company"/>
                    <Row className="subtitle">
                        Vission
                    </Row>
                    <Row className="detail-text">
                        {data.vision_company}
                    </Row>
                </Col>
                <Col  md={{ span: 1, offset: 0}}/>
                <Col>
                    <Row className="border-title-company"/>
                    <Row className="subtitle">
                        Mission
                    </Row>
                    <Row className="detail-text">
                        {data.mission_company}
                    </Row>
                </Col>
            </Row>
            <Row >
                <Col>
                    <Row className="border-title-member"/>
                    <Row className="subtitle">
                        Membership & Association
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
