import React from 'react'
import data from '../../../data'
import './Flow.css'
import ImageZoom from 'react-medium-image-zoom'
import FlowVPTI from '../../../images/flow-vpti.jpeg'
import { Row, Col, Tab, Nav } from 'react-bootstrap'

function Flow() {

    return (
        <>
            <div className='container-vpti'>
                <p className='about-vpti'>{data.vpti}</p>
                <div className='flow-vpti'>
                    <div className='border-title-vpti'/>
                    <h1 className='title'>Flow VPTI</h1>
                    <div>
                        <p className='detail-flow-vpti'>{data.flow_vpti}</p>
                    </div>
                    <div className='flow-img'>
                    <ImageZoom
                        image={{
                            src:
                            FlowVPTI,
                            alt: "VPTI Flow",
                            className: "image-flow-vpti"
                        }}
                        zoomImage={{
                            src:
                            FlowVPTI,
                            alt: "VPTI Flow",
                            className: "image-flow-vpti--zoomed"
                        }}
                    />
                    </div>
                    <div className='border-title-vpti'/>
                    <h1 className='title'>Import Verification</h1>
                    <Tab.Container id="left-tabs-example" defaultActiveKey="ALAS KAKI">
                        <Row  style={{backgroundColor: "#F2F2F2", border: "1px solid #E0E0E0", height: '2110px'}}>
                            <Col sm={4} style={{paddingLeft: "0", paddingRight: "0"}}>
                                <Nav variant="pills" className="flex-column">
                                    {data.import_vpti && data.import_vpti.map((item) => {
                                        return (
                                            <Nav.Item>
                                                <Nav.Link eventKey={item.tab_title} className="name-tab-vpti">{item.tab_title}</Nav.Link>
                                            </Nav.Item>
                                        )
                                    })}
                                </Nav>
                            </Col>
                            <Col sm={8} style={{paddingLeft: "0", paddingRight: "0"}}>
                                <Tab.Content className="vpti-content">
                                    {data.import_vpti && data.import_vpti.map(item => {
                                        return (
                                            <Tab.Pane eventKey={item.tab_title}>
                                                <div>
                                                    <img src={require(`../../../images/${item.pic}.png`).default} alt={item.tab_title} className='content-img'/>
                                                </div>
                                                <div className='content-title'>
                                                    {item.tab_title}
                                                </div>
                                                <div>
                                                    {item.dasar_hukum && item.dasar_hukum.map(i => {
                                                        return (
                                                            <>
                                                                <h3 className='subtitle-vpti'>{i.title}</h3>
                                                                {i.permendag.map(permendag => {
                                                                    return (
                                                                        <>
                                                                            <a href={permendag.url} target='_blank' className='permendag-main' rel="noreferrer">
                                                                                {permendag.main}<br/>
                                                                            </a>
                                                                            <ol className="list-rev">
                                                                                {permendag.rev.map(rev => {
                                                                                    return(
                                                                                        <li>
                                                                                            <a href={rev.url} className="rev" target='_blank' rel="noreferrer"> {rev.text} </a>
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
                                                        item.daftar_perubahan.map(i => {
                                                            return (
                                                                <>
                                                                    <h3 className='subtitle-vpti'>{i.title}</h3>
                                                                    {i.permendag.map(permendag => {
                                                                        return (
                                                                            <>
                                                                                <ol className="list-rev">
                                                                                    {permendag.rev.map(rev => {
                                                                                        return(
                                                                                            <li>
                                                                                                <a href={rev.url} className="rev" target='_blank' rel="noreferrer"> {rev.text} </a>
                                                                                            </li>
                                                                                        )
                                                                                    })}
                                                                                </ol>
                                                                            </>
                                                                        )
                                                                    })}
                                                                    {i.kepmendag.map(kepmendag => {
                                                                        return (
                                                                            <>
                                                                                <a href={kepmendag.url} target='_blank' className='kepmendag-main' rel="noreferrer">
                                                                                    {kepmendag.main}<br/><br/>
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
                                                    {item.ruang_lingkup.map(i => {
                                                            return (
                                                                <>
                                                                    <h3 className='subtitle-vpti'>{i.title}</h3>
                                                                    <p className='subtitle-ruang-lingkup'>{i.subtitle}</p>
                                                                    <ol className='list-rev-rl'>
                                                                        {i.val.map(items => {
                                                                            return (
                                                                                <li>{items}</li>
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
                                                            <div className={item.tab_title === "BARANG BERBASIS SISTEM PENDINGIN" ? 'rectangle-large' 
                                                                : [item.tab_title === "ELEKTRONIKA" || 
                                                                    item.tab_title === "KERAMIK" ||
                                                                    item.tab_title === "MAINAN ANAK" ||
                                                                    item.tab_title === "MAKANAN MINUMAN" ||
                                                                    item.tab_title === "OBAT TRADISIONAL DAN SUPLEMEN KESEHATAN" ||
                                                                    item.tab_title === "TELEPON SELULER, KOMPUTER GENGGAM (HANDHELD), DAN KOMPUTER TABLET" ||
                                                                    item.tab_title === "MESIN MULTIFUNGSI BERWARNA, MESIN FOTOKOPI BERWARNA, DAN MESIN PRINTER BERWARNA" 
                                                                    ? 'rectangle-small' : 'rectangle']}>
                                                                {
                                                                    item.catatan.map(i => {
                                                                        return(
                                                                            <>
                                                                                <p className='catatan-content'>{i.title}</p>
                                                                                <p className='catatan-content'>{i.text}</p>
                                                                            </>
                                                                        )
                                                                    })
                                                                }
                                                            </div>
                                                        </>
                                                    : <div/>
                                                }
                                                <div style={{padding: '40px 0 0 0'}}>
                                                    {item.kontak.map(i => {
                                                        return (
                                                            <>
                                                                <h3 className='subtitle-vpti'>{i.title}</h3>
                                                                <p style={{fontSize: '16px', fontWeight: '300', color: 'black', margin: '0'}}>{i.nama}</p>
                                                                <a style={{fontSize: '16px', fontWeight: '300', color: '#3A7AE3', margin: '0'}} href={"mailto:"+i.email}>{i.email}</a>
                                                                <p style={{fontSize: '16px', fontWeight: '300', color: 'black', margin: '0'}}>{i.telp}</p>
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
