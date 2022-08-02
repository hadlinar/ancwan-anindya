import React, { useEffect, useState } from 'react'
import './Certification.css'
import { Container, Row, Col } from 'react-bootstrap'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useTranslation } from "react-i18next";

function Certification() {
    const { t } = useTranslation()
    const [mobile, setMobile] = useState(false)

    useEffect(() => {
        Aos.init({
            duration: 1000
        });
    }, [])

    const rowCertification = () => {
        if (window.innerWidth <= 960) {
            setMobile(true)
        } else {
            setMobile(false)
        }
    }

    useEffect(() => {
        rowCertification();
    }, []);

    window.addEventListener('resize', rowCertification);

    return (
        <>
            <Container className="section-certification">
                <div data-aos="fade-up">
                    <Row className="border-title-certification" />
                    <Col className="title-certification">
                        <h1>{t('certification')}</h1>
                        <Row style={{paddingTop: '28px'}}>
                            {
                                mobile ? 
                                <>
                                    <Row className="row-img">
                                        <img className='img-kan' src={require(`../../../images/kan.png`).default} alt="KAN" />,
                                    </Row>
                                    <Row className="row-img">
                                        <img className='img-bav' src={require(`../../../images/bav.png`).default} alt="BAV" />,
                                    </Row>
                                </>:
                                <>
                                    <Col className="col-img">
                                        <img className='img-kan' src={require(`../../../images/kan.png`).default} alt="KAN" />,
                                    </Col>
                                    <Col className="col-img">
                                        <img className='img-bav' src={require(`../../../images/bav.png`).default} alt="BAV" />,
                                    </Col>
                                </>
                            }
                        </Row>
                    </Col>

                </div>
            </Container>  
        </>
    )
}

export default Certification