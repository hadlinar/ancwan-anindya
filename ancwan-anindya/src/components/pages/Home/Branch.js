import React, { useState } from 'react'
import './Branch.css'
import { Container, Row, Col } from 'react-bootstrap'
import CountUp from 'react-countup'
import VisibilitySensor from 'react-visibility-sensor'
import data from '../../../data'
import BranchMap from '../../../images/home-map.png'
function Branch() {
    const [objFocus, setFocus] = useState({
        focus: false,
        mapFocus: false
    });

    const { focus, mapFocus } = objFocus;
    
    return (
        <>
            <Container className="section-branch">
                <div data-aos="zoom-in-up">
                    <Row>
                        <Col >
                            <Row className="border-title-branch" />
                            <Row className="title-branch">
                                <h1>Branch Office & Representative</h1>
                            </Row>
                            <Row>
                                <p className="text-description">
                                    {data.branch}
                                </p>
                            </Row>
                        </Col>
                    </Row>
                    <VisibilitySensor onChange={(isVisible) => {
                        if (isVisible) { 
                            setFocus({
                                focus: false,
                                mapFocus: true
                            })
                        }
                    }}> 
                        <Row className="maps" >
                                <img className="maps-img" src={BranchMap} alt="Anindya Branch Office"  />
                                { mapFocus ? 
                                <>
                                    <svg width="808" height="769" viewBox="0 0 808 769" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g id="maps-arrow">
                                            <path
                                                id="mumbai"
                                                d="M577.573 691.339C577.573 691.339 380.573 667.004 263.573 581.339C103.073 463.824 55 316 55 316"
                                                stroke="black" stroke-width="2"/>
                                            <path
                                                id="dhaka"
                                                d="M578.407 691.455C578.407 691.455 451.854 663.955 361.407 544.455C278.907 435.455 315 277.731 315 277.731"
                                                stroke="black" stroke-width="2"/>
                                            <path
                                                id="bangkok"
                                                d="M577.819 691.47C577.819 691.47 476.319 652.47 453.319 563.47C432.951 484.656 474 400.731 474 400.731"
                                                stroke="black" stroke-width="2"/>
                                            <path
                                                id="singapore"
                                                d="M578 692.231L532.5 582.231"
                                                stroke="black" stroke-width="2"/>
                                            <path
                                                id="ho chi minh"
                                                d="M577.897 691.231C577.897 691.231 614.897 629.731 614.897 563.231C614.897 505.231 585.5 443.231 585.5 443.231"
                                                stroke="black" stroke-width="2"/>
                                            <path
                                                id="beijing"
                                                d="M578 691.956C578 691.956 663.631 595.956 678 466.956C700.5 264.956 637 1.23142 637 1.23142"
                                                stroke="black" stroke-width="2"/>
                                            <path
                                                id="seoul"
                                                d="M577 690.581C577 690.581 647.731 654.081 689 524.581C747 342.581 737.5 25.2314 737.5 25.2314"
                                                stroke="black" stroke-width="2"/>
                                        </g>
                                    </svg>
                                </> : <div/>}
                        </Row>
                    </VisibilitySensor>
                    <Row className="counter">
                        <Col md={4}>
                            <Row className="count-up">
                                <CountUp start={focus ? 0: null} end={14} redraw={true} duration={3}>
                                    {({ countUpRef }) => (
                                        <VisibilitySensor onChange={(isVisible) => {
                                            if (isVisible) { 
                                                setFocus({
                                                    focus: true,
                                                    mapFocus: true
                                                })
                                            }
                                        }}>
                                            <span ref={countUpRef} />
                                        </VisibilitySensor>
                                    )}
                                </CountUp>
                            </Row>
                            <Row className="count-text">Location in Indonesia</Row>
                        </Col>
                        <Col md={4}>
                            <Row className='count-up'>
                                <CountUp start={focus ? 0: null} end={8} redraw={true} duration={3}>
                                    {({ countUpRef }) => (
                                        <VisibilitySensor onChange={(isVisible) => {
                                            if (isVisible) { 
                                                setFocus({
                                                    focus: true,
                                                    mapFocus: true
                                                })
                                            }
                                        }}>
                                            <span ref={countUpRef} />
                                        </VisibilitySensor>
                                    )}
                                </CountUp>
                            </Row>
                            <Row className="count-text">Laboratories around the world</Row>
                        </Col>
                        <Col md={4}>
                            <Row className='count-up'>
                                <CountUp start={focus ? 0: null} end={7} redraw={true} duration={3}>
                                    {({ countUpRef }) => (
                                        <VisibilitySensor onChange={(isVisible) => {
                                            if (isVisible) { 
                                                setFocus({
                                                    focus: true,
                                                    mapFocus: true
                                                })
                                            }
                                        }}>
                                            <span ref={countUpRef} />
                                        </VisibilitySensor>
                                    )}
                                </CountUp>
                            </Row>
                            <Row className="count-text">Location in Overseas</Row>
                        </Col>
                    </Row>
                </div>
            </Container>
        </>
    )
}

export default Branch
