import React, { useState, useEffect } from 'react'
import data from '../../../data'
import './Import.css'
import { Row, Col, Tab, Nav } from 'react-bootstrap'
import { useTranslation } from "react-i18next"
import Sidebar from '../../Sidebar'

function Import() {
    const { t } = useTranslation()
    const [mobile, setMobile] = useState(false)
    const [dropdownState, setDropdown] = useState("0")

    useEffect(() => {
        dropdownVPTI();
    }, [])

    const dropdownVPTI = () => {
        if (window.innerWidth <= 960) {
            setMobile(true)
        } else {
            setMobile(false)
        }
    }

    window.addEventListener('resize', dropdownVPTI);

    return (
        <>
            <div className='container-import'>
                <div className='border-title-vpti'/>
                <h1 className='title'>{t('import_verif')}</h1>
                {
                    mobile ? 
                        <>
                            <select
                                className='custom-select'
                                onChange={(e) => {
                                    const selectedClient = e.target.value
                                    setDropdown(selectedClient)
                                }}
                            >
                                {
                                    Array.from(data.import_vpti, (e,i) => {
                                        return (
                                            <option value={i}>{t(`import_vpti.${i}.tab_title`)}</option>
                                        )
                                    })
                                }
                            </select>
                            <div className='container-vpti-mobile'>
                                <div>
                                    <img src={require(`../../../images/${t(`import_vpti.${parseInt(dropdownState)}.pic`)}.png`).default} alt={t(`import_vpti.${parseInt(dropdownState)}.tab_title`)} className='content-img'/>
                                </div>
                                <div>
                                    {
                                        Array.from(data.import_vpti[parseInt(dropdownState)].dasar_hukum, (item2, ind) => {
                                            return (
                                                <>
                                                    <h3 className='subtitle-vpti'>{t(`import_vpti.${parseInt(dropdownState)}.dasar_hukum.${ind}.title`)}</h3>
                                                    {
                                                        Array.from(item2.permendag, (item3, id) => {
                                                        return (
                                                            <>
                                                                <a href={item3.url} target='_blank' className='permendag-main' rel="noreferrer">
                                                                    {t(`import_vpti.${parseInt(dropdownState)}.dasar_hukum.${ind}.permendag.${id}.main`)}<br/>
                                                                </a>
                                                                <ol className="list-rev">
                                                                    {
                                                                    Array.from(item3.rev, (item4, idRev) => {
                                                                        return(
                                                                            <li>
                                                                                <a href={item4.url} className="rev" target='_blank' rel="noreferrer"> {t(`import_vpti.${parseInt(dropdownState)}.dasar_hukum.${ind}.permendag.${id}.rev.${idRev}.text`)} </a>
                                                                            </li>
                                                                        )
                                                                    })}
                                                                </ol>
                                                            </>
                                                        )
                                                    })}
                                                </>
                                            )
                                        })
                                    }
                                </div>
                                <div>
                                    {
                                        Array.isArray(data.import_vpti[parseInt(dropdownState)].daftar_perubahan) ?
                                            Array.from(data.import_vpti[parseInt(dropdownState)].daftar_perubahan, (item2, ind) => {
                                                return (
                                                    <>
                                                        <h3 className='subtitle-vpti'>{t(`import_vpti.${parseInt(dropdownState)}.daftar_perubahan.${ind}.title`)}</h3>
                                                        {Array.from(item2.kepmendag, (item3, id) => {
                                                            return (
                                                                <>
                                                                    <a href={item3.url} target='_blank' className='kepmendag-main' rel="noreferrer">
                                                                        {t(`import_vpti.${parseInt(dropdownState)}.daftar_perubahan.${ind}.kepmendag.${id}.main`)}<br/><br/>
                                                                    </a>
                                                                </>
                                                            )
                                                        })}
                                                    </>
                                                )
                                            }) 
                                        : <div/>
                                    }
                                </div>
                                <div>
                                    {
                                        Array.from(data.import_vpti[parseInt(dropdownState)].ruang_lingkup, (item2, ind) => {
                                            return (
                                                <>
                                                    <h3 className='subtitle-vpti'>{t(`import_vpti.${parseInt(dropdownState)}.ruang_lingkup.${ind}.title`)}</h3>
                                                    <p className='subtitle-ruang-lingkup'>{t(`import_vpti.${parseInt(dropdownState)}.ruang_lingkup.${ind}.subtitle`)}</p>
                                                    <ol className='list-rev-rl'>
                                                        {Array.from(item2.val, (item3, indVal) => {
                                                            return (
                                                                <li>{t(`import_vpti.${parseInt(dropdownState)}.ruang_lingkup.${ind}.val.${indVal}`)}</li>
                                                            )
                                                        })}
                                                    </ol>
                                                </>
                                            )
                                        })
                                    }
                                </div>
                                <div>
                                    { 
                                        parseInt(dropdownState) !== 3 ? 
                                            <>
                                                <div className="rectangle">
                                                    {
                                                        Array.from(data.import_vpti[parseInt(dropdownState)].catatan, (item2, ind) => {
                                                            return(
                                                                <>
                                                                    <p className='catatan-content'>{t(`import_vpti.${parseInt(dropdownState)}.catatan.${ind}.title`)}</p>
                                                                    <p className='catatan-content'>{t(`import_vpti.${parseInt(dropdownState)}.catatan.${ind}.text`)}</p>
                                                                </>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            </>
                                        : <div/>
                                    }
                                </div>
                                <div>
                                    {
                                        Array.from(data.import_vpti[parseInt(dropdownState)].kontak, (item2, ind) => {
                                            return (
                                                <>
                                                    <h3 className='subtitle-vpti'>{t(`import_vpti.${parseInt(dropdownState)}.kontak.${ind}.title`)}</h3>
                                                    <p style={{fontSize: '14px', fontWeight: '300', color: 'black', margin: '0'}}>{t(`import_vpti.${parseInt(dropdownState)}.kontak.${ind}.nama`)}</p>
                                                    <a style={{fontSize: '14px', fontWeight: '300', color: '#3A7AE3', margin: '0'}} href={"mailto:"+item2.email}>{t(`import_vpti.${parseInt(dropdownState)}.kontak.${ind}.email`)}</a>
                                                    <p style={{fontSize: '14px', fontWeight: '300', color: 'black', margin: '0'}}>{t(`import_vpti.${parseInt(dropdownState)}.kontak.${ind}.telp`)}</p>
                                                </>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </>
                    : 
                    <Tab.Container defaultActiveKey={1}>
                        <Row>
                            <Col sm={4} className='left-col-vpti'>
                                <Nav variant="pills" className="nav-left-vpti">
                                    {
                                        Array.from(data.import_vpti, (item, i) => {
                                            return (
                                                <Nav.Item className="nav_pills-vpti">
                                                    <Nav.Link eventKey={i+1} className="name-tab-vpti">{t(`import_vpti.${i}.tab_title`)}</Nav.Link>
                                                </Nav.Item>
                                            )
                                        })
                                    }
                                </Nav>
                            </Col>
                            <Col sm={8} className='right-col-vpti'>
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

                    // <Tab.Container defaultActiveKey={1}>
                    //     <Row>
                    //         <Col sm={4} className='left-col-vpti'>
                    //             <Nav variant="pills" className="nav-left-vpti">
                    //             {
                    //                 Array.from(data.import_vpti, (item, i) => {
                    //                     return (
                    //                         <Nav.Item className="nav_pills-vpti">
                    //                             <Nav.Link eventKey={i+1} className="name-tab-vpti">{t(`import_vpti.${i}.tab_title`)}</Nav.Link>
                    //                         </Nav.Item>
                    //                     )
                    //                 })
                    //             }
                    //             </Nav>
                    //         </Col>
                    //         <Col sm={8} className='right-col'>
                    //             <Tab.Content className='right-col-vpti'>
                    //             {Array.from(data.import_vpti, (item, i) => {
                    //                 return (
                    //                     <Tab.Pane eventKey={i+1}>
                    //                         <div>
                    //                             <img src={require(`../../../images/${item.pic}.png`).default} alt={t(`import_vpti.${i}.tab_title`)} className='content-img'/>
                    //                         </div>
                    //                         <div className='content-title'>
                    //                             {t(`import_vpti.${i}.tab_title`)}
                    //                         </div>
                    //                         <div>
                    //                             {
                    //                                 Array.from(item.dasar_hukum, (item2, ind) => {
                    //                                 return (
                    //                                     <>
                    //                                         <h3 className='subtitle-vpti'>{t(`import_vpti.${i}.dasar_hukum.${ind}.title`)}</h3>
                    //                                         {
                    //                                             Array.from(item2.permendag, (item3, id) => {
                    //                                             return (
                    //                                                 <>
                    //                                                     <a href={item3.url} target='_blank' className='permendag-main' rel="noreferrer">
                    //                                                         {t(`import_vpti.${i}.dasar_hukum.${ind}.permendag.${id}.main`)}<br/>
                    //                                                     </a>
                    //                                                     <ol className="list-rev">
                    //                                                         {
                    //                                                         Array.from(item3.rev, (item4, idRev) => {
                    //                                                             return(
                    //                                                                 <li>
                    //                                                                     <a href={item4.url} className="rev" target='_blank' rel="noreferrer"> {t(`import_vpti.${i}.dasar_hukum.${ind}.permendag.${id}.rev.${idRev}.text`)} </a>
                    //                                                                 </li>
                    //                                                             )
                    //                                                         })}
                    //                                                     </ol>
                    //                                                 </>
                    //                                             )
                    //                                         })}
                    //                                     </>
                    //                                 )
                    //                             })}
                    //                         </div>
                    //                         <div style={{padding: '20px 0 0 0'}}>
                    //                             {Array.isArray(item.daftar_perubahan) ?
                    //                                 Array.from(item.daftar_perubahan, (item2, ind) => {
                    //                                     return (
                    //                                         <>
                    //                                             <h3 className='subtitle-vpti'>{t(`import_vpti.${i}.daftar_perubahan.${ind}.title`)}</h3>
                    //                                             {Array.from(item2.kepmendag, (item3, id) => {
                    //                                                 return (
                    //                                                     <>
                    //                                                         <a href={item3.url} target='_blank' className='kepmendag-main' rel="noreferrer">
                    //                                                             {t(`import_vpti.${i}.daftar_perubahan.${ind}.kepmendag.${id}.main`)}<br/><br/>
                    //                                                         </a>
                    //                                                     </>
                    //                                                 )
                    //                                             })}
                    //                                         </>
                    //                                     )
                    //                                 }) : <div/>
                    //                             }
                    //                         </div>
                    //                         <div style={{padding: '20px 0 0 0'}}>
                    //                             {
                    //                                 Array.from(item.ruang_lingkup, (item2, ind) => {
                    //                                     return (
                    //                                         <>
                    //                                             <h3 className='subtitle-vpti'>{t(`import_vpti.${i}.ruang_lingkup.${ind}.title`)}</h3>
                    //                                             <p className='subtitle-ruang-lingkup'>{t(`import_vpti.${i}.ruang_lingkup.${ind}.subtitle`)}</p>
                    //                                             <ol className='list-rev-rl'>
                    //                                                 {Array.from(item2.val, (item3, indVal) => {
                    //                                                     return (
                    //                                                         <li>{t(`import_vpti.${i}.ruang_lingkup.${ind}.val.${indVal}`)}</li>
                    //                                                     )
                    //                                                 })}
                    //                                             </ol>
                    //                                         </>
                    //                                     )
                    //                                 })}
                    //                         </div>
                    //                         { 
                    //                             item.tab_title !== "BARANG MODAL TIDAK BARU" ? 
                    //                                 <>
                    //                                     <div className="rectangle">
                    //                                         {
                    //                                             Array.from(item.catatan, (item2, ind) => {
                    //                                                 return(
                    //                                                     <>
                    //                                                         <p className='catatan-content'>{t(`import_vpti.${i}.catatan.${ind}.title`)}</p>
                    //                                                         <p className='catatan-content'>{t(`import_vpti.${i}.catatan.${ind}.text`)}</p>
                    //                                                     </>
                    //                                                 )
                    //                                             })
                    //                                         }
                    //                                     </div>
                    //                                 </>
                    //                             : <div/>
                    //                         }
                    //                         <div style={{padding: '40px 0 0 0'}}>
                    //                             {Array.from(item.kontak, (item2, ind) => {
                    //                                 return (
                    //                                     <>
                    //                                         <h3 className='subtitle-vpti'>{t(`import_vpti.${i}.kontak.${ind}.title`)}</h3>
                    //                                         <p style={{fontSize: '16px', fontWeight: '300', color: 'black', margin: '0'}}>{t(`import_vpti.${i}.kontak.${ind}.nama`)}</p>
                    //                                         <a style={{fontSize: '16px', fontWeight: '300', color: '#3A7AE3', margin: '0'}} href={"mailto:"+item2.email}>{t(`import_vpti.${i}.kontak.${ind}.email`)}</a>
                    //                                         <p style={{fontSize: '16px', fontWeight: '300', color: 'black', margin: '0'}}>{t(`import_vpti.${i}.kontak.${ind}.telp`)}</p>
                    //                                     </>
                    //                                 )
                    //                             })}
                    //                         </div>
                    //                     </Tab.Pane>
                    //                 )
                    //             })}
                    //             </Tab.Content>
                    //         </Col>
                    //     </Row>
                    // </Tab.Container>
                }
            </div>
        </>
    )
}

export default Import
