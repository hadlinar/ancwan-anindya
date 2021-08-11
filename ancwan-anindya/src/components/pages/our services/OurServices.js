import React, { useState, useEffect } from 'react'
import { useLocation } from "react-router-dom"
import './OurServices.css'
import data from '../../../data'
import { Row, Tabs, Tab, Col } from 'react-bootstrap'
import { Carousel } from '3d-react-carousal'
import Navigation2 from '../../NavbarLayout2';

function OurServices(props) {
    const { pathname } = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname])

    const [key, setKey] = useState(props.location.search.substring(6))

    return (
        <>
            <Navigation2/>
            <div style={{maxWidth: "1440px", padding: "110px 80px 80px 80px", margin: "auto", textAlign: "center"}}>
                <h1>
                    {data.our_services}
                </h1>
                <Row style={{paddingTop: "80px"}}>
                    <Tabs defaultActiveKey="Coal" activeKey={key === "" ? "Coal" : key} onSelect={(k) => setKey(k)}>
                        {data.service_val.map(item => {
                            return (
                                <Tab eventKey={item.name} title={item.name}>
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
                                            {item.subtitle}
                                        </p>
                                        <Row style={{paddingTop: "80px", margin: "auto"}}>
                                            {
                                                item.name !== "Sand Pebble Crushed Stone" ? 
                                                <>
                                                        <Col md={6} style={{paddingRight: "80px"}}>
                                                            <Row className="border-title-services"/>
                                                            {item.col1.map(i => {
                                                                return (
                                                                    <>
                                                                        <Row className="col-title">
                                                                            {i.title}
                                                                        </Row>
                                                                        <Row>
                                                                            <ol className="list_">
                                                                                {i.val.map(isi => {
                                                                                    return(
                                                                                        <li>{isi}</li>
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
                                                                    {console.log(Array.isArray(item.col2))}
                                                                    <Row className="border-title-services"/>
                                                                    {item.col2.map(i => {
                                                                        return (
                                                                            <>
                                                                                <Row className="col-title">
                                                                                    {i.title}
                                                                                </Row>
                                                                                <Row>
                                                                                    <ol className="list_">
                                                                                        {i.val.map(isi => {
                                                                                            return(
                                                                                                <li>{isi}</li>
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
                                                        {item.col1.map(i => {
                                                            return (
                                                                <>
                                                                    <Row className="col-title">
                                                                        {i.title}
                                                                    </Row>
                                                                    <Row>
                                                                        <ol className="list_">
                                                                            {i.val.map(isi => {
                                                                                return(
                                                                                    <li>{isi}</li>
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
                                                            {item.col2.map(i => {
                                                                return (
                                                                    <>
                                                                        <Row className="col-title">
                                                                            {i.title}
                                                                        </Row>
                                                                        <Row>
                                                                            {i.val.map(isi => {
                                                                                return(
                                                                                    <Col>
                                                                                        <div style={{fontWeight: "600", textAlign: "left"}}>{isi.sub}</div>
                                                                                        <ol className="list_">
                                                                                            {isi.val_sub.map(val_sub => {
                                                                                                return (
                                                                                                    <li>{val_sub}</li>
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
                                                    Methodologies
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
                                                    Clients
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
