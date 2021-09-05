import React from 'react'
import '../../../App.css'
import { ButtonVPTI } from '../../Button'
import { Link } from 'react-router-dom'
import './HeroSection.css'
import { useTranslation } from "react-i18next"
import vid from '../../../videos/vpti-hero.mp4'

function HeroSectionVpti() {
    const { t } = useTranslation()

    return (
        <div className="hero-container-vpti">
            <video src={vid} autoPlay loop muted />
            <h1>{t('anindya_vpti_system')}</h1>
            <p>{t('sub_vpti')}</p>
            <div className="hero-btns">
                <ButtonVPTI className='btns' buttonStyle='btn--primary' buttonSize='btn--large' pathn='https://avs.anindya.biz/'>
                    {t('login')}
                </ButtonVPTI>
            </div>
        </div>
    )
}

export default HeroSectionVpti
