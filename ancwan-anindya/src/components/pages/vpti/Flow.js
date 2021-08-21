import React from 'react'
import data from '../../../data'
import './Flow.css'
import { Row, Col, Tab, Nav } from 'react-bootstrap'
import { useTranslation } from "react-i18next"
import { Button } from '../../Button'
import { Link } from 'react-router-dom'

function Flow() {
    const { t } = useTranslation()

    return (
        <>
            <div className='container-vpti'>
                <p className='about-vpti'>{t('desc_vpti')}</p>
                <div className='flow-vpti'>
                    <div className='border-title-vpti'/>
                    <Row>
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
                    <div>
                        <p className='detail-flow-vpti'>{t('desc_vpti')}</p>
                    </div>
                    <div className='flow-img'>
                    <img src={require(`../../../images/flow-vpti.png`).default} alt='VPTI Flow'/>
                    </div>
                    <div className='border-title-vpti'/>
                    <h1 className='title'>{t('import_verif')}</h1>
                    <Tab.Container id="left-tabs-example" defaultActiveKey={1}>
                        <Row  style={{backgroundColor: "#F2F2F2", border: "1px solid #E0E0E0", height: '2110px'}}>
                            <Col sm={4} style={{paddingLeft: "0", paddingRight: "0"}}>
                                <Nav variant="pills" className="flex-column">
                                    {
                                        Array.from(data.import_vpti, (item, i) => {
                                            return (
                                                <Nav.Item>
                                                    <Nav.Link eventKey={i+1} className="name-tab-vpti">{t(`import_vpti.${i}.tab_title`)}</Nav.Link>
                                                </Nav.Item>
                                            )
                                        })
                                    }
                                </Nav>
                            </Col>
                            <Col sm={8} style={{paddingLeft: "0", paddingRight: "0"}}>
                                <Tab.Content className="vpti-content">
                                    {Array.from(data.import_vpti, (item, i) => {
                                        return (
                                            <Tab.Pane eventKey={i+1}>
                                                <div>
                                                    <img src={require(`../../../images/${item.pic}.png`).default} alt={t(`import_vpti.${i}.tab_title`)} className='content-img'/>
                                                </div>
                                                <div className='content-title'>
                                                    {t(`import_vpti.${i}.tab_title`)}
                                                </div>
                                                <div>
                                                    {
                                                        Array.from(item.dasar_hukum, (item2, ind) => {
                                                        return (
                                                            <>
                                                                <h3 className='subtitle-vpti'>{t(`import_vpti.${i}.dasar_hukum.${ind}.title`)}</h3>
                                                                {
                                                                    Array.from(item2.permendag, (item3, id) => {
                                                                    return (
                                                                        <>
                                                                            <a href={item3.url} target='_blank' className='permendag-main' rel="noreferrer">
                                                                                {t(`import_vpti.${i}.dasar_hukum.${ind}.permendag.${id}.main`)}<br/>
                                                                            </a>
                                                                            <ol className="list-rev">
                                                                                {
                                                                                Array.from(item3.rev, (item4, idRev) => {
                                                                                    return(
                                                                                        <li>
                                                                                            <a href={item4.url} className="rev" target='_blank' rel="noreferrer"> {t(`import_vpti.${i}.dasar_hukum.${ind}.permendag.${id}.rev.${idRev}.text`)} </a>
                                                                                        </li>
                                                                                    )
                                                                                })}
                                                                            </ol>
                                                                        </>
                                                                    )
                                                                })}
                                                            </>
                                                        )
                                                    })}
                                                </div>
                                                <div style={{padding: '20px 0 0 0'}}>
                                                    {Array.isArray(item.daftar_perubahan) ?
                                                        Array.from(item.daftar_perubahan, (item2, ind) => {
                                                            return (
                                                                <>
                                                                    <h3 className='subtitle-vpti'>{t(`import_vpti.${i}.daftar_perubahan.${ind}.title`)}</h3>
                                                                    {Array.from(item2.kepmendag, (item3, id) => {
                                                                        return (
                                                                            <>
                                                                                <a href={item3.url} target='_blank' className='kepmendag-main' rel="noreferrer">
                                                                                    {t(`import_vpti.${i}.daftar_perubahan.${ind}.kepmendag.${id}.main`)}<br/><br/>
                                                                                </a>
                                                                            </>
                                                                        )
                                                                    })}
                                                                </>
                                                            )
                                                        }) : <div/>
                                                    }
                                                </div>
                                                <div style={{padding: '20px 0 0 0'}}>
                                                    {
                                                        Array.from(item.ruang_lingkup, (item2, ind) => {
                                                            return (
                                                                <>
                                                                    <h3 className='subtitle-vpti'>{t(`import_vpti.${i}.ruang_lingkup.${ind}.title`)}</h3>
                                                                    <p className='subtitle-ruang-lingkup'>{t(`import_vpti.${i}.ruang_lingkup.${ind}.subtitle`)}</p>
                                                                    <ol className='list-rev-rl'>
                                                                        {Array.from(item2.val, (item3, indVal) => {
                                                                            return (
                                                                                <li>{t(`import_vpti.${i}.ruang_lingkup.${ind}.val.${indVal}`)}</li>
                                                                            )
                                                                        })}
                                                                    </ol>
                                                                </>
                                                            )
                                                        })}
                                                </div>
                                                { 
                                                    item.tab_title !== "BARANG MODAL TIDAK BARU" ? 
                                                        <>
                                                            <div className="rectangle">
                                                                {
                                                                    Array.from(item.catatan, (item2, ind) => {
                                                                        return(
                                                                            <>
                                                                                <p className='catatan-content'>{t(`import_vpti.${i}.catatan.${ind}.title`)}</p>
                                                                                <p className='catatan-content'>{t(`import_vpti.${i}.catatan.${ind}.text`)}</p>
                                                                            </>
                                                                        )
                                                                    })
                                                                }
                                                            </div>
                                                        </>
                                                    : <div/>
                                                }
                                                <div style={{padding: '40px 0 0 0'}}>
                                                    {Array.from(item.kontak, (item2, ind) => {
                                                        return (
                                                            <>
                                                                <h3 className='subtitle-vpti'>{t(`import_vpti.${i}.kontak.${ind}.title`)}</h3>
                                                                <p style={{fontSize: '16px', fontWeight: '300', color: 'black', margin: '0'}}>{t(`import_vpti.${i}.kontak.${ind}.nama`)}</p>
                                                                <a style={{fontSize: '16px', fontWeight: '300', color: '#3A7AE3', margin: '0'}} href={"mailto:"+item2.email}>{t(`import_vpti.${i}.kontak.${ind}.email`)}</a>
                                                                <p style={{fontSize: '16px', fontWeight: '300', color: 'black', margin: '0'}}>{t(`import_vpti.${i}.kontak.${ind}.telp`)}</p>
                                                            </>
                                                        )
                                                    })}
                                                </div>
                                            </Tab.Pane>
                                        )
                                    })}
                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                </div>
            </div>
            
        </>
    )
}

export default Flow
