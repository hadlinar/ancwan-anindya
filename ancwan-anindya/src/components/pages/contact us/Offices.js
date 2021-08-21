import React from 'react'
import './Offices.css'
import data from '../../../data'
import { Row, Col } from 'react-bootstrap'
import { useTranslation } from "react-i18next";

function Offices() {
    const { t } = useTranslation()

    return (
        <>
            <div className='container-office'>
                <div className='border-title-office'/>
                <h1 className='title-office'>{t('our_offices')}</h1>
                <div className='list-container'>
                <Row md={3} className="list-office">
                        {data.our_offices.map(item => {
                            return (
                                <Col style={{paddingLeft: '0', paddingBottom: '40px'}}>
                                    <div>
                                        <div className="location-office">{item.location}</div>
                                    </div>
                                    <div className="address-branch">
                                        <div>
                                            {item.address} <br/>
                                            {item.detail} <br/>
                                            <i class="fas fa-envelope"/> <a href={"mailto:"+item.email}>{item.email}<br/></a>
                                            {
                                                item.phone === "" ? <div/> : 
                                                <div>
                                                    <i class="fas fa-phone-alt"/> {item.phone} <br/>
                                                </div>
                                            }
                                        </div>
                                    </div>
                                </Col>
                            )
                        })}
                    </Row>
                </div>
            </div>
        </>
    )
}

export default Offices
