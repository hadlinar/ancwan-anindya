import React, { useState, useEffect } from 'react'
import './Flow.css'
import { Row, Col, Tab, Nav } from 'react-bootstrap'
import { useTranslation } from "react-i18next"
import { Button } from '../../Button'
import { Link } from 'react-router-dom'

function Flow() {
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
            <div className='container-flow'>
                <div className='flow-vpti'>
                    <div style={{backgroundColor: 'pink'}}>
                        <div className='border-title-vpti'/>
                        {
                            mobile ? 
                            <div>
                                <h1 className='title'>{t('flow_vpti')}</h1>
                            </div>
                            : <Row>
                                <Col md={6}>
                                    <h1 className='title'>{t('flow_vpti')}</h1>
                                </Col>
                                <Col md={6} style={{justifyContent: 'flex-end', display: 'flex', paddingRight: '20px'}}>
                                    <Link to={{ pathname: "https://drive.google.com/file/d/1ANSEJ77k0btyqWIKYBXVASqy7uZmj6cp/preview" }} target="_blank">
                                        <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--xsmall'>
                                            {t('button')}
                                        </Button>
                                    </Link>
                                </Col>
                            </Row>
                        }
                        <div>
                            <p className='detail-flow-vpti'>{t('desc_vpti')}</p>
                        </div>
                        <div className='flow-img'>
                            <img className='img-vpti' src={mobile ? require(`../../../images/vpti-portrait.png`).default : require(`../../../images/flow-vpti.png`).default} alt='VPTI Flow'/>
                        </div>
                        {
                            mobile ? 
                            <Row>
                                <Col md={12}>
                                    <Link to={{ pathname: "https://drive.google.com/file/d/1ANSEJ77k0btyqWIKYBXVASqy7uZmj6cp/preview" }} target="_blank">
                                        <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--xsmall'>
                                            {t('button')}
                                        </Button>
                                    </Link>
                                </Col>
                            </Row>
                            : <div/>
                        }
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default Flow
