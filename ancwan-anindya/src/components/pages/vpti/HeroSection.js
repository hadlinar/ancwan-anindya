import React, { useState, useEffect } from 'react'
import '../../../App.css'
import { ButtonVPTI } from '../../Button'
import './HeroSection.css'
import { useTranslation } from "react-i18next"
import vid from '../../../videos/vpti-hero.mp4'
import bg from '../../../images/hero-banner-vpti.jpeg'

function HeroSectionVpti() {
    const { t } = useTranslation()
    const [mobile, setMobile] = useState(false)

    useEffect(() => {
        mobileVer();
    }, [])

    const mobileVer = () => {
        if (window.innerWidth <= 960) {
            setMobile(true)
        } else {
            setMobile(false)
        }
    }

    window.addEventListener('resize', mobileVer);

    return (
        mobile ? 
        <div className="hero-container-vpti-mobile">
            <h1>{t('anindya_vpti_system')}</h1>
            <p>{t('sub_vpti')}</p>
            <div className="hero-btns">
                <ButtonVPTI className='btns' buttonStyle='btn--primary' buttonSize='btn--large' pathn='https://avs.anindya.biz/'>
                    {t('login')}
                </ButtonVPTI>
            </div>
        </div>
        : 
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
