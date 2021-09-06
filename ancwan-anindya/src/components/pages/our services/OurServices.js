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
    const [mobile, setMobile] = useState(false)
    const [key, setKey] = useState(props.location.search.substring(6))
    
    var dropdownDict = [
        {
            "name": "VPTI",
            "sort": "1"
        },
        {
            "name": "Coal",
            "sort": "2"
        },
        {
            "name": "Marine",
            "sort": "3"
        },
        {
            "name": "Oil & Gas",
            "sort": "4"
        },
        {
            "name": "Agriculture & Food",
            "sort": "5"
        },
        {
            "name": "Mineral & Water",
            "sort": "6"
        },
        {
            "name": "Sand, Pebble & Crushed Stone",
            "sort": "7"
        }
    ]

    var val = dropdownDict.find(x => x.sort === key)
    const [dropdownState, setDropdown] = useState(key !== "" ? val.sort : "1")
    var f = dropdownDict.find(x => x.sort === dropdownState)
    
    
    var d = data.service_val.findIndex(x => x.name === f.name)
    var filtered = data.service_val[d]
    

    useEffect(() => {
        window.scrollTo(0, 0);
        dropdownService();
    }, [pathname])

    const dropdownService = () => {
        if (window.innerWidth <= 960) {
            setMobile(true)
        } else {
            setMobile(false)
        }
    }

    window.addEventListener('resize', dropdownService);

    return (
        <>
            <Navigation2/>

            {
                mobile ?
                    <div className='service-container'>
                        <h1>
                            {t('our_service')}
                        </h1>
                        <Row style={{paddingTop: "40px"}}>
                            <div className='dropdown-container'>
                                <select
                                    className='custom-select'
                                    defaultValue={key !== "" ? parseInt(val.sort) : 0}
                                    onChange={(e) => {
                                        const selectedClient = e.target.value
                                        setDropdown(selectedClient)
                                    }}
                                >
                                    {
                                        Array.from(data.service_val, (e,i) => {
                                            return (
                                                <option value={i+1}>{t(`service_val.${i}.name`)}</option>
                                            )
                                        })
                                    }
                                </select>
                                <div className='container-service'>
                                    <div className="slides-services">
                                        <Carousel slides={
                                            [
                                                <img src={require(`../../../images/services/${f.name}-1.png`).default} alt={f.name}/>,
                                                <img src={require(`../../../images/services/${f.name}-2.png`).default} alt={f.name}/>,
                                                <img src={require(`../../../images/services/${f.name}-3.png`).default} alt={f.name}/>
                                            ]
                                        } arrows={false} />
                                    </div>
                                    <div>
                                        <p className="desc-our-service">
                                            {t(`service_val.${d}.subtitle`)}
                                        </p>
                                    </div>
                                    <div>
                                        <div className='content-container'>
                                            <div className="border-title-services"/>
                                            {
                                                filtered.name !== "VPTI" ? 
                                                    Array.from(filtered.col1, (e, i) => {
                                                        return (
                                                            <>
                                                                <div className="col-title">
                                                                    {t(`service_val.${d}.col1.${i}.title`)}
                                                                </div>
                                                                <div>
                                                                    <ol className="list_">
                                                                        {Array.from(e.val, (a, id) => {
                                                                            return(
                                                                                <li>{t(`service_val.${d}.col1.${i}.val.${id}`)}</li>
                                                                            )
                                                                        })}
                                                                    </ol>
                                                                </div>
                                                            </>
                                                        )
                                                    }) 
                                                    : Array.from(filtered.col1, (item, index) => {
                                                        return (
                                                            <>
                                                                <div className="col-title">
                                                                    {t(`service_val.${d}.col1.${index}.title`)}
                                                                </div>
                                                                <div>
                                                                    {
                                                                        Array.from(item.val, (item_val, idx) => {
                                                                            return(
                                                                                <div>
                                                                                    <div style={{fontWeight: "600", textAlign: "left"}}>{t(`service_val.${d}.col1.${index}.val.${idx}.sub_val`)}</div>
                                                                                    <ol className="list_">
                                                                                        {
                                                                                            Array.from(item_val.val, (e, ind) => {
                                                                                                return (
                                                                                                    <>
                                                                                                        <li>{t(`service_val.${d}.col1.${index}.val.${idx}.val.${ind}.item`)}</li>
                                                                                                        <ul className="list-dash">
                                                                                                        {
                                                                                                            Array.from(e.sub_item, (el, u) => {
                                                                                                                return (
                                                                                                                    <li>{t(`service_val.${d}.col1.${index}.val.${idx}.val.${ind}.sub_item.${u}`)}</li>
                                                                                                                )
                                                                                                        })}
                                                                                                        </ul>
                                                                                                    </>
                                                                                                )
                                                                                        })}
                                                                                    </ol>
                                                                                </div>
                                                                            )
                                                                    })}
                                                                </div>
                                                            </>
                                                        )
                                                    })
                                            }
                                        </div>
                                        <div className='content-container'>
                                            {
                                                Array.from(filtered.col2, (e, i) => {
                                                    return (
                                                        <>
                                                            {
                                                                e.length !== 0 ? 
                                                                <>  
                                                                    <div className="border-title-services"/>
                                                                    <div className="col-title">
                                                                        {t(`service_val.${d}.col2.${i}.title`)}
                                                                    </div>
                                                                    {
                                                                        filtered.name !== "Sand, Pebble & Crushed Stone" ? 
                                                                            <div>
                                                                                <ol className="list_">
                                                                                    {Array.from(e.val, (e, id) => {
                                                                                        return(
                                                                                            <li>{t(`service_val.${d}.col2.${i}.val.${id}`)}</li>
                                                                                        )
                                                                                    })}
                                                                                </ol>
                                                                            </div>
                                                                        : 
                                                                            Array.from(e.val, (a, id) => {
                                                                                return(
                                                                                    <>
                                                                                        <div className="sub-title">
                                                                                            {t(`service_val.${d}.col2.${i}.val.${id}.sub`)}
                                                                                        </div>
                                                                                        <div>
                                                                                            <ol className="list_" style={{paddingBottom: '0'}}>
                                                                                                { Array.from(a.val_sub, (a, index) => {
                                                                                                    return (
                                                                                                        <li>{t(`service_val.${d}.col2.${i}.val.${id}.val_sub.${index}`)}</li>
                                                                                                    )
                                                                                                })}
                                                                                            </ol>
                                                                                        </div>
                                                                                    </>
                                                                                )
                                                                            })
                                                                            
                                                                    }
                                                                </>
                                                                : <div/>
                                                            }
                                                        </>
                                                    )
                                                })
                                            }
                                        </div>
                                        <div className='content-container'>
                                                {
                                                    filtered.method.length !== 0 ? 
                                                    <>  
                                                        <div className="border-title-services"/>
                                                        <div className="col-title">
                                                            {t(`methodologies`)}
                                                        </div>
                                                        <div className='pic-container-mobile'>
                                                            {
                                                                Array.from(filtered.method, pic => {
                                                                    return (
                                                                        <img className='method-pic' src={require(`../../../images/${pic}.png`).default} alt={pic}  />
                                                                    )
                                                                })
                                                            }
                                                        </div>
                                                    </>
                                                    : <div/>
                                                }
                                        </div>
                                        <div className='content-container' style={{paddingTop: '20px'}}>
                                            {
                                                filtered.clients.length !== 0 ? 
                                                <>  
                                                    <div className="border-title-services"/>
                                                    <div className="col-title">
                                                        {t(`client`)}
                                                    </div>
                                                    <div className='pic-container-mobile'>
                                                        {
                                                            Array.from(filtered.clients, pic => {
                                                                return (
                                                                    pic !== "LV" ? <img className='method-pic' src={require(`../../../images/clients/${filtered.name}/${pic}.png`).default} alt={pic}  /> 
                                                                    : <img className='method-pic-lv' src={require(`../../../images/clients/${filtered.name}/${pic}.png`).default} alt={pic}  />
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                </>
                                                : <div/>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Row>
                    </div>
                : <div className='service-container'>
                    <h1>
                        {t('our_service')}
                    </h1>
                    <Row style={{paddingTop: "80px"}}>
                        <Tabs activeKey={key === "" ? 1 : key} onSelect={(k) => setKey(k)}>
                            {
                                Array.from(data.service_val, (item , i) => {
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
                                                                    {
                                                                        item.name !== "VPTI" ? 
                                                                        Array.from(item.col1, (e, index) => {
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
                                                                        })
                                                                        : Array.from(item.col1, (item, index) => {
                                                                            return (
                                                                                <>
                                                                                    <Row className="col-title">
                                                                                        {t(`service_val.${i}.col1.${index}.title`)}
                                                                                    </Row>
                                                                                    <Row>
                                                                                        {
                                                                                            Array.from(item.val, (item_val, idx) => {
                                                                                                return(
                                                                                                    <Col>
                                                                                                        <div style={{fontWeight: "600", textAlign: "left"}}>{t(`service_val.${i}.col1.${index}.val.${idx}.sub_val`)}</div>
                                                                                                        <ol className="list_">
                                                                                                            {
                                                                                                                Array.from(item_val.val, (e, ind) => {
                                                                                                                    return (
                                                                                                                        <>
                                                                                                                            <li>{t(`service_val.${i}.col1.${index}.val.${idx}.val.${ind}.item`)}</li>
                                                                                                                            <ul className="list-dash">
                                                                                                                            {
                                                                                                                                Array.from(e.sub_item, (el, u) => {
                                                                                                                                    return (
                                                                                                                                        <li>{t(`service_val.${i}.col1.${index}.val.${idx}.val.${ind}.sub_item.${u}`)}</li>
                                                                                                                                    )
                                                                                                                            })}
                                                                                                                            </ul>
                                                                                                                        </>
                                                                                                                    )
                                                                                                            })}
                                                                                                        </ol>
                                                                                                    </Col>
                                                                                                )
                                                                                        })}
                                                                                    </Row>
                                                                                </>
                                                                            )
                                                                        })
                                                                    }
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
                                                                        </> 
                                                                        : <div/>
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
                                                                    {
                                                                        Array.from(item.col2, (item, index) => {
                                                                            return (
                                                                                <>
                                                                                    <Row className="col-title">
                                                                                        {t(`service_val.${i}.col2.${index}.title`)}
                                                                                    </Row>
                                                                                    <Row>
                                                                                        {
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
                                                                        })
                                                                    }
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
                                                                        {
                                                                            item2 !== "LV" ? <img className="clients-services" src={require(`../../../images/clients/${item.name}/${item2}.png`).default} alt={item2}  />
                                                                            : 
                                                                            <img className="clients-services-lv" src={require(`../../../images/clients/${item.name}/${item2}.png`).default} alt={item2}  />
                                                                        }
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
            }
        </>
    )
}

export default OurServices
