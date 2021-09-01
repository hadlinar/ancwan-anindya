import React, { useState, useRef, useEffect } from 'react'
import './Branch.css'
import { Row, Col } from 'react-bootstrap'
import CountUp from 'react-countup'
import VisibilitySensor from 'react-visibility-sensor'
import MapsImg from '../../../images/markered-maps.png'
import { useTranslation } from "react-i18next";

function Branch() {
    const [focus, setFocus] = useState(false)
    const [mapFocus, setMapFocus] = useState(false)
    const [mobile, setMobile] = useState(false)
    const { t } = useTranslation()


    const canvasRef = useRef(null)
    const [context, setContext] = useState(null)
    const [canvasImg, setImage] = useState(null)

    useEffect(() => {
        showMap();
    }, [])
    
    useEffect(() => {
        if(canvasRef.current) {
            const canvasImg = document.getElementById('canvas')
            const ctx = canvasRef.current.getContext('2d')

            if(ctx) {
                setContext(ctx)
                setImage(canvasImg)
            }
        }
        
        var background = new Image()
        background.src = MapsImg
        
        if(context && canvasImg) {

            background.onload = function() {
                canvasImg.width = background.width
                canvasImg.height = background.height
                context.drawImage(background, 0, 0, 1143, 847)
            }

            function animatePathDrawing(ctx) {
                var start = null;
                
                var step = function animatePathDrawingStep(timestamp) {
                    if (start === null)
                        start = timestamp;
                    
                    var delta = timestamp - start,
                        progress = Math.min(delta / 900, 1);
                    drawBezierSplit(ctx, 599.15625, 767, 276.15625, 680, 148.15625, 424, 0, progress)
                    drawBezierSplit(ctx, 599.15625, 767, 371.15625, 575, 381.15625, 360, 0, progress)
                    drawBezierSplit(ctx, 599.15625, 767, 560.15625, 666, 560.15625, 666, 0, progress)
                    drawBezierSplit(ctx, 599.15625, 767, 487.15625, 629, 515.15625, 501, 0, progress)
                    drawBezierSplit(ctx, 599.15625, 767, 635.15625, 631, 597.15625, 543, 0, progress)
                    drawBezierSplit(ctx, 599.15625, 767, 791.15625, 414, 727.15625, 103, 0, progress)
                    drawBezierSplit(ctx, 599.15625, 767, 907.15625, 452, 870.15625, 146, 0, progress)
                    
                    
                    if (progress < 1) {
                        window.requestAnimationFrame(step);
                    }
                };
                
                window.requestAnimationFrame(step);
            }
            
            function lerp(v0, v1, t) {
                return ( 1.0 - t ) * v0 + t * v1;
            }
            
            function drawBezierSplit(ctx, x0, y0, x1, y1, x2, y2, t0, t1) {
                ctx.beginPath();
                
                if( 0.0 === t0 && t1 === 1.0 ) {
                    ctx.moveTo( x0, y0 );
                    ctx.quadraticCurveTo( x1, y1, x2, y2 );
                } else if( t0 !== t1 ) {
                    var t00 = t0 * t0,
                        t01 = 1.0 - t0,
                        t02 = t01 * t01,
                        t03 = 2.0 * t0 * t01;
                    
                    var nx0 = t02 * x0 + t03 * x1 + t00 * x2,
                        ny0 = t02 * y0 + t03 * y1 + t00 * y2;
                    
                    t00 = t1 * t1;
                    t01 = 1.0 - t1;
                    t02 = t01 * t01;
                    t03 = 2.0 * t1 * t01;
                    
                    var nx2 = t02 * x0 + t03 * x1 + t00 * x2,
                        ny2 = t02 * y0 + t03 * y1 + t00 * y2;
                    
                    var nx1 = lerp ( lerp ( x0 , x1 , t0 ) , lerp ( x1 , x2 , t0 ) , t1 ),
                        ny1 = lerp ( lerp ( y0 , y1 , t0 ) , lerp ( y1 , y2 , t0 ) , t1 );
                    
                    ctx.moveTo( nx0, ny0 );
                    ctx.quadraticCurveTo( nx1, ny1, nx2, ny2 );
                }
                
                ctx.stroke();
                ctx.closePath();
            }

            
            if(window.scrollY > 2061) {
                animatePathDrawing(context);
            }
        }
    })

    const changeBackground = () => {
        if(window.scrollY > 2061) {
            setMapFocus(true)
        }  
    }

    const showMap = () => {
        if (window.innerWidth <= 960) {
            setMobile(true)
        } else {
            setMobile(false)
        }
    }

    window.addEventListener('resize', showMap);

    window.addEventListener('scroll', changeBackground);
    
    return (
        <div className='branch-home'>
            <div data-aos="zoom-in-up">
                <Row>
                    <Col md={12}>
                        <Row className="border-title-branch" />
                        <Row className="title-branch">
                            <h1>{t('branch_office')}</h1>
                        </Row>
                        <Row>
                            <p className="text-description">
                            {t('branch')}
                            </p>
                        </Row>
                    </Col>
                </Row>
                {
                    mobile ? <div/> 
                    : <Row className="maps">
                    <VisibilitySensor onChange={(isVisible) => {
                        if (isVisible) { 
                            setMapFocus(true)
                        }
                    }}>
                        <canvas id='canvas' ref={canvasRef}/>
                    </VisibilitySensor>
                </Row>
                }
                <Row className="counter">
                    <Col md={4}>
                        <Row className="count-up">
                            <CountUp start={focus ? 0: null} end={14} redraw={false} duration={3}>
                                {({ countUpRef }) => (
                                    <VisibilitySensor onChange={(isVisible) => {
                                        if (isVisible) { 
                                            setFocus(true)
                                        }
                                    }}>
                                        <span ref={countUpRef} />
                                    </VisibilitySensor>
                                )}
                            </CountUp>
                        </Row>
                        <Row className="count-text">{t('location_in_indonesia')}</Row>
                    </Col>
                    <Col md={4}>
                        <Row className='count-up'>
                            <CountUp start={focus ? 0: null} end={8} redraw={false} duration={3}>
                                {({ countUpRef }) => (
                                    <VisibilitySensor onChange={(isVisible) => {
                                        if (isVisible) { 
                                            setFocus(true)
                                        }
                                    }}>
                                        <span ref={countUpRef} />
                                    </VisibilitySensor>
                                )}
                            </CountUp>
                        </Row>
                        <Row className="count-text">{t('lab_around_the_world')}</Row>
                    </Col>
                    <Col md={4}>
                        <Row className='count-up'>
                            <CountUp start={focus ? 0: null} end={7} redraw={false} duration={3}>
                                {({ countUpRef }) => (
                                    <VisibilitySensor onChange={(isVisible) => {
                                        if (isVisible) { 
                                            setFocus(true)
                                        }
                                    }}>
                                        <span ref={countUpRef} />
                                    </VisibilitySensor>
                                )}
                            </CountUp>
                        </Row>
                        <Row className="count-text">{t('location_in_overseas')}</Row>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Branch