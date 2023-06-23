import React, { useState, useEffect } from 'react'
import './Definition.css'
import { Row, Col } from 'react-bootstrap'
import { useTranslation } from "react-i18next"

function Definition() {
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
            <div className='container-def'>
                <div className='definition'>
                    <div>
                        <div className='border-title-tkdn'/>
                            <h1 className='title'>{t('definition_title')}</h1>
                    </div>
                    <div className='sub-def'>
                        <Row>
                            <Col md={6}>
                                <h3 className='title-detail-desc'>{t('def_domestic')}</h3>
                                <p className='detail-desc-tkdn'>{t('def_domestic_desc')}</p>
                            </Col>
                            <Col md={6}>
                                <h3 className='title-detail-desc'>{t('def_local')}</h3>
                                <p className='detail-desc-tkdn'>{t('def_local_desc')}</p>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default Definition
