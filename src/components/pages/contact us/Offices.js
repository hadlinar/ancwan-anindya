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
                    <Row>
                        <Col>
                            <Col className="col-style">
                                <div className="hq">
                                    {t('domestic_hq')}
                                </div>
                                <Col className="col-style">
                                    <div>
                                        <div className="location-office">{data.indo_office[0].location}</div>
                                    </div>
                                    <div>
                                        <div className="address-branch">
                                            {data.indo_office[0].address}<br/>
                                            {data.indo_office[0].detail}<br/>
                                            <div className='detail-contact'>
                                                <i class="fas fa-envelope office" style={{color: 'black', marginRight: '10px'}}/> <a href={"mailto:"+data.indo_office[0].email}>{data.indo_office[0].email}<br/></a>
                                                <i class="fas fa-phone-alt" style={{color: 'black', marginRight: '10px'}}/> <a href={"tel:"+data.indo_office[0].phone}> {data.indo_office[0].phone} <br/></a>
                                            </div>
                                        </div>
                                        {/* <div>
                                            <p className='inquiries'>{t('inquiries')}</p>
                                        </div> */}
                                    </div>
                                    <div>
                                        <p className='inquiries'>{t('inquiries')}</p>
                                    </div>
                                    <div>
                                            <div className="inquiries-style">
                                                {t('coal_and_mines')}
                                            </div>
                                            <div>
                                                {data.coal_n_mines_contact.map((item) => {
                                                    return(
                                                        <div>
                                                            <p className='detail-contact' style={{fontSize: '14px'}}>{item.name}</p>
                                                            <i class="fas fa-envelope" style={{color: 'black', marginRight: '10px'}}/> <a href={"mailto:"+item.email} style={{fontWeight: '300', fontSize: '14px'}}>{item.email}<br/></a>
                                                            <i class="fas fa-phone-alt" style={{color: 'black', marginRight: '10px'}}/> <a href={"tel:"+item.phone} style={{fontWeight: '300', fontSize: '14px'}}> {item.phone} <br/></a>
                                                        </div>
                                                    )
                                                })}
                                            </div>

                                            <br/>
                                            <div className="inquiries-style">
                                                {t('import_verif')}
                                            </div>
                                            <div>
                                                {data.import_verif_contact.map((item) => {
                                                    return(
                                                        <div>
                                                            <p className='detail-contact' style={{fontSize: '14px'}}>{item.name}</p>
                                                            <i class="fas fa-envelope" style={{color: 'black', marginRight: '10px'}}/> <a href={"mailto:"+item.email} style={{fontWeight: '300', fontSize: '14px'}}>{item.email}<br/></a>
                                                            <i class="fas fa-phone-alt" style={{color: 'black', marginRight: '10px'}}/> <a href={"tel:"+item.phone} style={{fontWeight: '300', fontSize: '14px'}}> {item.phone} <br/></a>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                    </div>
                                </Col>
                            </Col>
                        </Col>
                        <Col>
                            <Col style={{paddingLeft: '0'}}>
                                <div className="hq">
                                    {t('overseas_hq')}
                                </div>
                            </Col>
                            <Col className="col-style">
                                {
                                    data.our_offices.map((item) => {
                                        return (
                                            <>
                                                <div>
                                                    <div className="location-office">{item.location}</div>
                                                </div>
                                                <div>
                                                    <div className="address-branch-overseas">
                                                        {item.address}<br/>
                                                        {item.detail}<br/>
                                                        {
                                                            item.detail2 === "" ? <div/> : <>{item.detail2}<br/></>
                                                        }
                                                        <div className='detail-contact-overseas'>
                                                            <i class="fas fa-envelope office" style={{color: 'black', marginRight: '10px'}}/> <a href={"mailto:"+item.email}>{item.email}<br/></a>
                                                            {
                                                                item.phone === "" ? <div/> : 
                                                                <>
                                                                    <i class="fas fa-phone-alt" style={{color: 'black', marginRight: '10px'}}/> <a href={"tel:"+item.phone}> {item.phone} <br/></a>
                                                                </>
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    })
                                }
                            </Col>
                        </Col>
                        <Col>
                            <Col style={{paddingLeft: '0'}}>
                                <div className="hq">
                                    {t('overseas_representative')}
                                </div>
                            </Col>
                            <Col className="col-style">
                                {
                                    data.our_offices_rep.map((item) => {
                                        return (
                                            <>
                                                <div>
                                                    <div className="location-office">{t('overseas_rep_us')}</div>
                                                </div>
                                                <div>
                                                    <div className="address-branch-overseas">
                                                        {item.address}<br/>
                                                        {item.detail}<br/>
                                                        {
                                                            item.detail2 === "" ? <div/> : <>{item.detail2}<br/></>
                                                        }
                                                        <div className='detail-contact-overseas'>
                                                            <i class="fas fa-envelope office" style={{color: 'black', marginRight: '10px'}}/> <a href={"mailto:"+item.email}>{item.email}<br/></a>
                                                            {
                                                                item.phone === "" ? <div/> : 
                                                                <>
                                                                    <i class="fas fa-phone-alt" style={{color: 'black', marginRight: '10px'}}/> <a href={"tel:"+item.phone}> {item.phone} <br/></a>
                                                                </>
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    })
                                }
                            </Col>
                        </Col>
                    </Row>
                    {/* <Row md={3} className="list-office">
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
                    </Row> */}
                </div>
            </div>
        </>
    )
}

export default Offices
