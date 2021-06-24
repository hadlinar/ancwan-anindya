import React from 'react'
import '../App.css'
import { Button } from './Button'
import './HeroSection.css'
// import { useTranslation } from "react-i18next";

function HeroSection() {
    // const { t } = useTranslation()
    return (
        <div className="hero-container">
            {/* <video src="/videos/lalala" autoplay loop muted> */}
            {/* <h1>{t('hero_title')}</h1> */}
            <h1>We are Anindya,</h1>
            {/* <h1>{t('hero_title2')}</h1> */}
            <h1>an independent surveying company</h1>
            {/* <p>{t('hero_subtitle')}</p> */}
            <p>Our service network from branch, laboratory, and office to provide super services for our customers</p>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                    {/* {t('about_anindya')} */}
                    About Anindya
                </Button>
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                    About VPTI
                </Button>
            </div>
        </div>
    )
}

export default HeroSection
