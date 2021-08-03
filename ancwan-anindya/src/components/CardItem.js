import React from 'react'
import { Link } from 'react-router-dom'
import data from '../data'
import './Cards.css'

function CardItem() {
    return (
        <>
            {data.services && data.services.map(item => {
                return (
                    // <Col key={item.key}>
                        <Link to={item.path}>
                            <div className="card">
                                <div className="card-wrapper">
                                    <img className="card-img" src={require(`../images/service-${item.img}.png`).default} 
                                        alt={item.label}  />
                                </div>
                            </div>
                        </Link>
                    // </Col>
                )
            })}
        </>
    )
}

export default CardItem
