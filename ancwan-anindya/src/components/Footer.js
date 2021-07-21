import React from 'react'
import { Row, Col } from 'react-bootstrap'
import './Footer.css'

function Footer() {
    return (
        <>
            <footer>
                <div className="footer--light">
                    <Row className="row-footer">
                        <Col md={3} className="col-footer1">
                            <img className="footer-logo" src={require(`../images/anindya-logo-footer.png`).default} alt="anindya-logo"/>
                        </Col>
                        <Col className="col-footer2">
                            <p className="footer-widget-title">About Anindya</p>
                            <p className="footer-widget-content">
                                An independent surveying company, providing quality and quantity superintending service for coal and minerals industry, the oil and gas sector as well as marine surveys.
                                <br/>
                                Received permission from the Directorate General of Foreign Trade, Ministry of Trade of the Republic of Indonesia to be able to verify imported products for commodities.
                            </p>
                        </Col>
                        <Col>
                            <p className="footer-widget-title">Our HQ</p>
                            <p className="footer-widget-content">
                                Springhill Office Tower 17 th & 18th Floor
                                <br/>Jl. H. Benyamin Suaeb Ruas D7  Block D6
                                <br/>Pademangan Timur Jakarta Utara
                                <br/>DKI Jakarta 14410
                            </p>
                            <p className="footer-widget-content"><i class="fas fa-phone-alt"/>    (+62 21) 2260 6207</p>
                            <p className="footer-widget-content"><i class="fas fa-fax"/>    (+62 21) 2260 6236</p>
                            <p className="footer-widget-content"><i class="fas fa-envelope"/>    marketing@anindya.biz</p>
                        </Col>
                    </Row>
                    <Row className="row-footer">
                        <p className="copywrite">© 2021 ANINDYA. All Rights Reserved.</p>
                    </Row>
                </div>
            </footer>
        </>
    )
}

export default Footer
