import React from 'react'
import '../../../App.css'
import { Button } from '../../Button'
import { Link } from 'react-router-dom'
import './HeroSection.css'
import { useTranslation } from "react-i18next"
import vid from '../../../videos/vpti-hero.mp4'

function HeroSectionVpti() {
    const { t } = useTranslation()

    return (
        <div className="hero-container-vpti">
            {/* <div className="vid-container"> */}
                <video src={vid} autoPlay loop muted />
            {/* </div> */}
            <h1>{t('anindya_vpti_system')}</h1>
            <p>{t('sub_vpti')}</p>
            <div className="hero-btns">
                <Link to={{ pathname: "https://avs.anindya.biz/" }} target="_blank">
                    <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                        {t('login')}
                    </Button>
                </Link>
            </div>
        </div>
    )
}

export default HeroSectionVpti
