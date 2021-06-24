import React, { useEffect } from 'react'
import './OurService.css'
import { Container, Row } from 'react-bootstrap'
import Cards from '../../Cards'
import Aos from 'aos'
import 'aos/dist/aos.css'

function OurService() {

    useEffect(() => {
        Aos.init({
            duration: 1000
        });
    }, [])

    return (
        <>
            <Container className="section-service">
                <div data-aos="fade-up">
                    <Row className="border-title-service" />
                    <Row className="row-title-services">
                        <h1>Our Services</h1>
                    </Row>
                    <Row>
                        <Cards />
                    </Row>
                </div>
            </Container>
        </>
    )
}

export default OurService
