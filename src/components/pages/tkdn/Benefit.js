import React, { useState, useEffect } from 'react'
import './Benefit.css'
import { Row, Col } from 'react-bootstrap'
import data from '../../../data'
import { useTranslation } from "react-i18next"

function Benefit() {

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
            <div className='container-benefit'>
                <div>
                    <div className='border-title-tkdn'/>
                        <h1 className='title'>{t('benefit_title')}</h1>
                </div>
                <Row md={3} className="list-branch-benefit">
                    { Array.from(data.benefit, (e, i) => {
                        return (
                            <Col className="col-list-branch">
                                <div>
                                    <img className="img-benefit" src={require(`../../../images/benefit/${e['pic']}.png`).default} alt={e['pic']}  />
                                </div>
                                <div>
                                    <div className="benefit-title">{t(`benefit.${i}.title`)}</div>
                                </div>
                                
                                <div>
                                    <div className="benefit-desc">{t(`benefit.${i}.desc`)}</div>
                                </div>
                            </Col>
                        )
                    })}
                </Row>
            </div>
        </>
    )
}

export default Benefit
