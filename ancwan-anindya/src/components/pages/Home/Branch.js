import React, { useState, useRef, useEffect } from 'react'
import './Branch.css'
import { Container, Row, Col } from 'react-bootstrap'
import CountUp from 'react-countup'
import VisibilitySensor from 'react-visibility-sensor'
import data from '../../../data'
import ScriptTag from 'react-script-tag';
import MapsImg from '../../../images/markered-maps.png'

function Branch() {
    const [objFocus, setFocus] = useState({
        focus: false,
        mapFocus: false
    });

    const { focus, mapFocus } = objFocus;

    const canvasRef = useRef(null)
    const [context, setContext] = useState(null)
    
    useEffect(() => {
        if(canvasRef.current) {
            const ctx = canvasRef.current.getContext('2d')

            if(ctx) {
                setContext(ctx)
            }
        }
        
        var background = new Image()
        background.src = MapsImg
        
        if(context) {

            background.onload = function() {
                context.drawImage(background, 0, 0)
            }

            function animatePathDrawing(ctx) {
                var start = null;
                
                var step = function animatePathDrawingStep(timestamp) {
                    if (start === null)
                        start = timestamp;
                    
                    var delta = timestamp - start,
                        progress = Math.min(delta / 1000, 1);
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
                
                if( 0.0 == t0 && t1 == 1.0 ) {
                    ctx.moveTo( x0, y0 );
                    ctx.quadraticCurveTo( x1, y1, x2, y2 );
                } else if( t0 != t1 ) {
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
            
            animatePathDrawing(context);
        }
    })
    
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
                                { mapFocus ? 
                                <>
                                    <canvas id="canvas" ref={canvasRef} width="1143" height="847"/>
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








// import React, { useState, useRef } from 'react'
// import './Branch.css'
// import { Container, Row, Col } from 'react-bootstrap'
// import CountUp from 'react-countup'
// import VisibilitySensor from 'react-visibility-sensor'
// import data from '../../../data'
// import ScriptTag from 'react-script-tag';

// class Branch extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             focus: false,
//             mapFocus: false,
//         }
//     }

//     Maps = props => {
//         const canvasRef = useRef(null)
//         const canvas = canvasRef.current
//         const ctx = canvas.getContext("2d");

//         canvas.width = 1143;
//         canvas.height = 847;
        
        
//         var background = new Image();
//         background.src = "url('../../../images/markered-maps.png')";
        
//         background.onload = function(){
//             ctx.drawImage(background,0,0);   
//         }
        
//         function animatePathDrawing(ctx) {
//             var start = null;
            
//             var step = function animatePathDrawingStep(timestamp) {
//                 if (start === null)
//                     start = timestamp;
                
//                 var delta = timestamp - start,
//                     progress = Math.min(delta / 1000, 1);
//                 drawBezierSplit(ctx, 565, 722, 273, 633, 140, 400, 0, progress)
//                 drawBezierSplit(ctx, 565, 722, 347, 600, 359, 339, 0, progress)
//                 drawBezierSplit(ctx, 565, 722, 531, 638, 530, 630, 0, progress)
//                 drawBezierSplit(ctx, 565, 722, 460, 594, 487, 472, 0, progress)
//                 drawBezierSplit(ctx, 565, 722, 612, 620, 565, 513, 0, progress)
//                 drawBezierSplit(ctx, 565, 722, 755, 414, 688, 98, 0, progress)
//                 drawBezierSplit(ctx, 565, 722, 849, 465, 821, 138, 0, progress)
                
                
//                 if (progress < 1) {
//                     window.requestAnimationFrame(step);
//                 }
//             };
            
//             window.requestAnimationFrame(step);
//         }
        
//         function lerp(v0, v1, t) {
//             return ( 1.0 - t ) * v0 + t * v1;
//         }
        
//         function drawBezierSplit(ctx, x0, y0, x1, y1, x2, y2, t0, t1) {
//             ctx.beginPath();
            
//             if( 0.0 == t0 && t1 == 1.0 ) {
//                 ctx.moveTo( x0, y0 );
//                 ctx.quadraticCurveTo( x1, y1, x2, y2 );
//             } else if( t0 != t1 ) {
//                 var t00 = t0 * t0,
//                     t01 = 1.0 - t0,
//                     t02 = t01 * t01,
//                     t03 = 2.0 * t0 * t01;
                
//                 var nx0 = t02 * x0 + t03 * x1 + t00 * x2,
//                     ny0 = t02 * y0 + t03 * y1 + t00 * y2;
                
//                 t00 = t1 * t1;
//                 t01 = 1.0 - t1;
//                 t02 = t01 * t01;
//                 t03 = 2.0 * t1 * t01;
                
//                 var nx2 = t02 * x0 + t03 * x1 + t00 * x2,
//                     ny2 = t02 * y0 + t03 * y1 + t00 * y2;
                
//                 var nx1 = lerp ( lerp ( x0 , x1 , t0 ) , lerp ( x1 , x2 , t0 ) , t1 ),
//                     ny1 = lerp ( lerp ( y0 , y1 , t0 ) , lerp ( y1 , y2 , t0 ) , t1 );
                
//                 ctx.moveTo( nx0, ny0 );
//                 ctx.quadraticCurveTo( nx1, ny1, nx2, ny2 );
//             }
            
//             ctx.stroke();
//             ctx.closePath();
//         }
        
//         animatePathDrawing(ctx);

//         return <canvas id="canvas" ref={canvasRef} {...props}/>
//     }

//     render() {
//         return (
//             <>
//                 <Container className="section-branch">
//                     <div data-aos="zoom-in-up">
//                         <Row>
//                             <Col >
//                                 <Row className="border-title-branch" />
//                                 <Row className="title-branch">
//                                     <h1>Branch Office & Representative</h1>
//                                 </Row>
//                                 <Row>
//                                     <p className="text-description">
//                                         {data.branch}
//                                     </p>
//                                 </Row>
//                             </Col>
//                         </Row>
//                         <VisibilitySensor onChange={(isVisible) => {
//                             if (isVisible) { 
//                                 this.setState({
//                                     focus: false,
//                                     mapFocus: true
//                                 })
//                             }
//                         }}> 
//                             <Row className="maps" >
//                                     { this.state.mapFocus ? 
//                                     <>
//                                         <div></div>
//                                     </> : <div/>}
//                             </Row>
//                         </VisibilitySensor>
//                         <Row className="counter">
//                             <Col md={4}>
//                                 <Row className="count-up">
//                                     <CountUp start={this.state.focus ? 0: null} end={14} redraw={true} duration={3}>
//                                         {({ countUpRef }) => (
//                                             <VisibilitySensor onChange={(isVisible) => {
//                                                 if (isVisible) { 
//                                                     this.setState({
//                                                         focus: true,
//                                                         mapFocus: true
//                                                     })
//                                                 }
//                                             }}>
//                                                 <span ref={countUpRef} />
//                                             </VisibilitySensor>
//                                         )}
//                                     </CountUp>
//                                 </Row>
//                                 <Row className="count-text">Location in Indonesia</Row>
//                             </Col>
//                             <Col md={4}>
//                                 <Row className='count-up'>
//                                     <CountUp start={this.state.focus ? 0: null} end={8} redraw={true} duration={3}>
//                                         {({ countUpRef }) => (
//                                             <VisibilitySensor onChange={(isVisible) => {
//                                                 if (isVisible) { 
//                                                     this.setState({
//                                                         focus: true,
//                                                         mapFocus: true
//                                                     })
//                                                 }
//                                             }}>
//                                                 <span ref={countUpRef} />
//                                             </VisibilitySensor>
//                                         )}
//                                     </CountUp>
//                                 </Row>
//                                 <Row className="count-text">Laboratories around the world</Row>
//                             </Col>
//                             <Col md={4}>
//                                 <Row className='count-up'>
//                                     <CountUp start={this.state.focusfocus ? 0: null} end={7} redraw={true} duration={3}>
//                                         {({ countUpRef }) => (
//                                             <VisibilitySensor onChange={(isVisible) => {
//                                                 if (isVisible) { 
//                                                     this.setState({
//                                                         focus: true,
//                                                         mapFocus: true
//                                                     })
//                                                 }
//                                             }}>
//                                                 <span ref={countUpRef} />
//                                             </VisibilitySensor>
//                                         )}
//                                     </CountUp>
//                                 </Row>
//                                 <Row className="count-text">Location in Overseas</Row>
//                             </Col>
//                         </Row>
//                     </div>
//                 </Container>
//             </>
//         )
//     }
// }

// export default Branch