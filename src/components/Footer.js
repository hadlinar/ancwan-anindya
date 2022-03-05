import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import './Footer.css'
import { useTranslation } from "react-i18next"
import { ButtonVPTI } from './Button'

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
            <footer style={{backgroundColor: "#0167af"}}>
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
                                <div className="hero-btns" style={{marginTop: '-10px', marginBottom: '20px'}}>
                                    <ButtonVPTI className='btns' buttonStyle='btn--white' buttonSize='btn--xsmall' pathn='https://drive.google.com/file/d/1KInr8egz9zBQ1SBJGlcXFw7brjUpzioN/preview'>
                                        {t('company_profile')}
                                    </ButtonVPTI>
                                </div>
                            </Row>
                            <Row>
                                <p className="footer-widget-title-hq">{t('hq')}</p>
                                <p className="footer-widget-content-hq">
                                    Springhill Office Tower 17 th & 18th Floor
                                    <br/>Jl. H. Benyamin Suaeb Ruas D7  Block D6
                                    <br/>Pademangan Timur, Jakarta Utara
                                    <br/>Jakarta 14410
                                </p>
                                <div className='footer-widget-hq-contact'>
                                    <i class="fas fa-phone-alt"/><a href="tel:(+6221)22606207" style={{color: 'white', paddingTop: '0px', paddingLeft: '10px'}}>    (+62 21) 2260 6207</a><br/><br/>
                                    <i class="fas fa-fax"/><a style={{color: 'white', paddingTop: '0px', paddingLeft: '10px'}}>    (+62 21) 2260 6236</a><br/><br/>
                                    <i class="fas fa-envelope"/><a href="mailto:marketing@anindya.biz" style={{color: 'white', paddingTop: '0px', paddingLeft: '10px'}}>    marketing@anindya.biz</a>
                                </div>
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
                                    <div className="hero-btns" style={{marginTop: '-10px'}}>
                                        <ButtonVPTI className='btns' buttonStyle='btn--white' buttonSize='btn--xsmall' pathn='https://drive.google.com/file/d/1KInr8egz9zBQ1SBJGlcXFw7brjUpzioN/preview'>
                                            {t('company_profile')}
                                        </ButtonVPTI>
                                    </div>
                                </Col>
                                <Col>
                                    <p className="footer-widget-title">{t('hq')}</p>
                                    <a className="footer-widget-misc" href="https://www.google.com/maps/search/Springhill+Office+Tower+17th+and+18th+Floor+Jl.+H.+Benyamin+Suaeb+Ruas+D7+Block+D6+Pademangan+Timur+Jakarta+Utara+DKI+Jakarta+14410/@-6.1495136,106.8503369,17z" target="_blank">
                                        Springhill Office Tower 17th & 18th Floor
                                        <br/>Jl. H. Benyamin Suaeb Ruas D7  Block D6
                                        <br/>Pademangan Timur, Jakarta Utara
                                        <br/>Jakarta 14410
                                    </a>
                                    <p/>
                                    <i class="fas fa-phone-alt"/><a className="footer-widget-misc" href="tel:(+6221)22606207">    (+62 21) 2260 6207</a><br/><br/>
                                    <i class="fas fa-fax"/><a className="footer-widget-misc">    (+62 21) 2260 6236</a><br/><br/>
                                    <i class="fas fa-envelope"/><a className="footer-widget-misc" href="mailto:marketing@anindya.biz">    marketing@anindya.biz</a>
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
