import React from 'react'
import { Link } from 'react-router-dom'
import data from '../data'
import './Cards.css'
import { useTranslation } from "react-i18next";

function CardItem() {
    const { t } = useTranslation()

    return (
        <>

            {
                Array.from(data.services, (e, i) => {
                    return (
                        <Link to={{
                            pathname: e.path,
                            search: "?sort="+e.label,
                        }}>
                            <div className="card">
                                <div className="card-wrapper">
                                    <img className="card-img" src={require(`../images/service-${t(`services.${i}.img`)}.png`).default} 
                                        alt={t(`services.${i}.label`)}  />
                                </div>
                            </div>
                        </Link>
                    )
                })
            }
        </>
    )
}

export default CardItem
