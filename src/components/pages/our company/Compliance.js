import React, { useState, useEffect } from 'react'
import './Compliance.css'
import { Row, Col } from 'react-bootstrap'
import { useTranslation } from "react-i18next";

function Compliance() {
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
                        <div>
                                {t('compliance_iso')}
                            </div>
                            <div>
                                {t('compliance_policy')}
                            </div>
                            <div>
                                {t('compliance_1')}
                            </div>
                            <div>
                                {t('compliance_2')}
                            </div>
                            <div>
                                {t('compliance_thanks')}
                        </div>
                    </div>
                :   
                <>
                    <Row>
                        <Col sm={4}>
                            <img className="footer-logo" src={require(`../../../images/bribery.png`).default} alt="anti bribery" style={{marginBottom: '20px'}}/>
                            <img className="footer-logo" src={require(`../../../images/iso37001.png`).default} alt="iso 37001"/>
                        </Col>
                        <Col sm={8}>
                            <p className='content-compliance'>
                                {t('compliance_iso')}
                            </p>
                            <p className='content-compliance'>
                                <a href={'https://drive.google.com/file/d/1Y1yhEsbds7TBdfzubXL7Gl7Hy3zJxzXs/view'} target='_blank' className='clickable'>{t('compliance_policy')}</a>
                            </p>
                            <p className='content-compliance'>
                                {t('compliance_1')}
                            </p>
                            <p className='content-compliance'>
                                {t('compliance_2')}<a className='clickable' href={'https://forms.gle/SVWY2UF9G2YsuxPV9'} target='_blank'> {t('compliance_click')} </a>{t('compliance_2_cont')}
                            </p>
                            <p className='content-compliance'>
                                {t('compliance_thanks')}
                            </p>
                        </Col>
                    </Row>
                </>
            }
        </>
    )
}

export default Compliance