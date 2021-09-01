import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import './Footer.css'
import { useTranslation } from "react-i18next";

function Footer() {
    const { t } = useTranslation()
    const [mobile, setMobile] = useState(false)

    useEffect(() => {
        showLogo();
    }, [])

    const showLogo = () => {
        if (window.innerWidth <= 960) {
            setMobile(true)
        } else {
            setMobile(false)
        }
    }

    window.addEventListener('resize', showLogo);

    return (
        <>
            <footer style={{backgroundColor: "white"}}>
                <div className="footer--light">
                    {
                        mobile ? 
                        <Row className="row-footer">
                            <Row className="col-footer1">
                                <img className="footer-logo" src={require(`../images/anindya-logo-footer.png`).default} alt="anindya-logo"/>
                            </Row>
                            <Row>
                                <p className="footer-widget-title">{t('about_anindya')}</p>
                                <p className="footer-widget-content">
                                    {t('desc_footer_top')}
                                    <br/>
                                    {t('desc_footer_bottom')}
                                </p>
                            </Row>
                            <Row>
                                <p className="footer-widget-title-hq">{t('hq')}</p>
                                <p className="footer-widget-content-hq">
                                    Springhill Office Tower 17 th & 18th Floor
                                    <br/>Jl. H. Benyamin Suaeb Ruas D7  Block D6
                                    <br/>Pademangan Timur Jakarta Utara
                                    <br/>DKI Jakarta 14410
                                </p>
                                <p className="footer-widget-content-hq"><i class="fas fa-phone-alt"/>    (+62 21) 2260 6207</p><br/>
                                <p className="footer-widget-content-hq"><i class="fas fa-fax"/>    (+62 21) 2260 6236</p><br/>
                                <p className="footer-widget-content-hq" ><i class="fas fa-envelope"/><a href="mailto:marketing@anindya.biz">    marketing@anindya.biz</a></p>
                            </Row>
                            <Row>
                                <p className="copywrite">© 2021 ANINDYA. All Rights Reserved.</p>
                            </Row>
                        </Row>
                        : <>
                            <Row className="row-footer">
                                <Col md={3} className="col-footer1">
                                    <img className="footer-logo" src={require(`../images/anindya-logo-footer.png`).default} alt="anindya-logo"/>
                                </Col>
                                <Col className="col-footer2">
                                    <p className="footer-widget-title">{t('about_anindya')}</p>
                                    <p className="footer-widget-content">
                                        {t('desc_footer_top')}
                                        <br/>
                                        {t('desc_footer_bottom')}
                                    </p>
                                </Col>
                                <Col>
                                    <p className="footer-widget-title">{t('hq')}</p>
                                    <p className="footer-widget-content">
                                        Springhill Office Tower 17 th & 18th Floor
                                        <br/>Jl. H. Benyamin Suaeb Ruas D7  Block D6
                                        <br/>Pademangan Timur Jakarta Utara
                                        <br/>DKI Jakarta 14410
                                    </p>
                                    <p className="footer-widget-content"><i class="fas fa-phone-alt"/>    (+62 21) 2260 6207</p>
                                    <p className="footer-widget-content"><i class="fas fa-fax"/>    (+62 21) 2260 6236</p>
                                    <i class="fas fa-envelope"/><a className="footer-widget-content" href="mailto:marketing@anindya.biz">    marketing@anindya.biz</a>
                                </Col>
                            </Row>
                            <Row className="row-footer">
                                <p className="copywrite">© 2021 ANINDYA. All Rights Reserved.</p>
                            </Row>
                        </>
                    }
                </div>
            </footer>
        </>
    )
}

export default Footer
