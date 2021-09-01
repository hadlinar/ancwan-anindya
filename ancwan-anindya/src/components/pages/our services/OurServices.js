import React, { useState, useEffect } from 'react'
import { useLocation } from "react-router-dom"
import './OurServices.css'
import data from '../../../data'
import { Row, Tabs, Tab, Col } from 'react-bootstrap'
import { Carousel } from '3d-react-carousal'
import Navigation2 from '../../NavbarLayout2';
import { useTranslation } from "react-i18next";

function OurServices(props) {
    const { pathname } = useLocation()
    const { t } = useTranslation()

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname])

    const [key, setKey] = useState(props.location.search.substring(6))

    return (
        <>
            <Navigation2/>
            <div style={{maxWidth: "1340px", padding: "110px 80px 80px 80px", margin: "auto", textAlign: "center"}}>
                <h1>
                    {t('our_service')}
                </h1>
                <Row style={{paddingTop: "80px"}}>
                    <Tabs activeKey={key === "" ? 1 : key} onSelect={(k) => setKey(k)}>
                        {Array.from(data.service_val, (item , i) => {
                            return (
                                <Tab eventKey={i+1} title={t(`service_val.${i}.name`)}>
                                    <div className="slides-services">
                                        <Carousel slides={
                                            [
                                                <img src={require(`../../../images/services/${item.name}-1.png`).default} alt={item.name}/>,
                                                <img src={require(`../../../images/services/${item.name}-2.png`).default} alt={item.name}/>,
                                                <img src={require(`../../../images/services/${item.name}-3.png`).default} alt={item.name}/>
                                            ]
                                        } arrows={true} />
                                    </div>
                                    <div>
                                        <p className="desc-our-service">
                                            {t(`service_val.${i}.subtitle`)}
                                        </p>
                                        <Row style={{paddingTop: "80px", margin: "auto"}}>
                                            {
                                                item.name !== "Sand, Pebble & Crushed Stone" ? 
                                                <>
                                                        <Col md={6} style={{paddingRight: "80px"}}>
                                                            <Row className="border-title-services"/>
                                                            { Array.from(item.col1, (e, index) => {
                                                                return (
                                                                    <>
                                                                        <Row className="col-title">
                                                                            {t(`service_val.${i}.col1.${index}.title`)}
                                                                        </Row>
                                                                        <Row>
                                                                            <ol className="list_">
                                                                                { Array.from(e.val, (isi, ind) => {
                                                                                    return(
                                                                                        <li>{t(`service_val.${i}.col1.${index}.val.${ind}`)}</li>
                                                                                    )
                                                                                })}
                                                                            </ol>
                                                                        </Row>
                                                                    </>
                                                                )
                                                            })}
                                                        </Col>
                                                        <Col md={6}>
                                                            {
                                                                item.col2.length !== 0 ? 
                                                                <>
                                                                    <Row className="border-title-services"/>
                                                                    {Array.from(item.col2, (e, index) => {
                                                                        return (
                                                                            <>
                                                                                <Row className="col-title">
                                                                                    {t(`service_val.${i}.col2.${index}.title`)}
                                                                                </Row>
                                                                                <Row>
                                                                                    <ol className="list_">
                                                                                    { Array.from(e.val, (isi, ind) => {
                                                                                        return(
                                                                                            <li>{t(`service_val.${i}.col2.${index}.val.${ind}`)}</li>
                                                                                        )
                                                                                    })}
                                                                                    </ol>
                                                                                </Row>
                                                                            </>
                                                                        )
                                                                    })}
                                                                </> : <div/>
                                                            }
                                                        </Col>
                                                </>   
                                                :
                                                <>
                                                    <Col md={4}>
                                                        <Row className="border-title-services"/>
                                                        {Array.from(item.col1, (e, index) => {
                                                            return (
                                                                <>
                                                                    <Row className="col-title">
                                                                        {t(`service_val.${i}.col1.${index}.title`)}
                                                                    </Row>
                                                                    <Row>
                                                                        <ol className="list_">
                                                                            { Array.from(e.val, (isi, ind) => {
                                                                                return(
                                                                                    <li>{t(`service_val.${i}.col1.${index}.val.${ind}`)}</li>
                                                                                )
                                                                            })}
                                                                        </ol>
                                                                    </Row>
                                                                </>
                                                            )
                                                        })}
                                                    </Col>
                                                    <Col md={8}>
                                                            <Row className="border-title-services"/>
                                                            {Array.from(item.col2, (item, index) => {
                                                                return (
                                                                    <>
                                                                        <Row className="col-title">
                                                                            {t(`service_val.${i}.col2.${index}.title`)}
                                                                        </Row>
                                                                        <Row>
                                                                            {
                                                                            // i.val.map(isi => {
                                                                                Array.from(item.val, (item_val, idx) => {
                                                                                return(
                                                                                    <Col>
                                                                                        <div style={{fontWeight: "600", textAlign: "left"}}>{t(`service_val.${i}.col2.${index}.val.${idx}.sub`)}</div>
                                                                                        <ol className="list_">
                                                                                            {
                                                                                                Array.from(item_val.val_sub, (item_sub_val, ind) => {
                                                                                                return (
                                                                                                    <li>{t(`service_val.${i}.col2.${index}.val.${idx}.val_sub.${ind}`)}</li>
                                                                                                )
                                                                                            })}
                                                                                        </ol>
                                                                                    </Col>
                                                                                )
                                                                            })}
                                                                        </Row>
                                                                    </>
                                                                )
                                                            })}
                                                    </Col>
                                                </>
                                            }
                                        </Row>
                                        {item.method.length !== 0 ? 
                                            <Row style={{paddingTop: "40px", margin: "auto"}}>
                                                <Row className="border-title-services"/>
                                                <Row className="col-title" style={{width: "100%"}}>
                                                    {t('methodologies')}
                                                </Row>
                                                <Row style={{margin: "auto"}}>
                                                    {item.method.map(i => {
                                                        return (
                                                            <Col key={i} style={{margin: "auto"}}>
                                                                <img className="clients" src={require(`../../../images/${i}.png`).default} alt={i}  />
                                                            </Col>
                                                        )
                                                    })}
                                                </Row>
                                            </Row>
                                        : <div/>}
                                        {item.clients.length !== 0 ? 
                                            <Row style={{paddingTop: "40px", margin: "auto"}}>
                                                <Row className="border-title-services"/>
                                                <Row className="col-title" style={{width: "100%"}}>
                                                    {t('client')}
                                                </Row>
                                                <Row style={{margin: "auto"}}>
                                                    {item.clients.map((item2,i) => {
                                                        return (
                                                            <Col key={i} style={{margin: "auto"}}>
                                                                <img className="clients-services" src={require(`../../../images/clients/${item.name}/${i+1} - ${item2} - ${item.name}.png`).default} alt={item2}  />
                                                            </Col>
                                                        )
                                                    })}
                                                </Row>
                                            </Row>
                                        : <div/>}
                                    </div>
                                </Tab>
                            )
                        })}
                    </Tabs>
                </Row>
            </div>
        </>
    )
}

export default OurServices
