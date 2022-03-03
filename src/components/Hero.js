import React, { useEffect, useState } from 'react'
import '../App.css'
import { Button } from './Button'
import './HeroSection.css'
import { useTranslation } from "react-i18next"
import vid from '../videos/home-hero.mov'

const Hero = () => {
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
        <div className="hero-container-mobile">
            <h1>{t('hero_title')}</h1>
            <h1>{t('hero_title2')}</h1>
            <p>{t('hero_subtitle')}</p>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large' link='/our-company'>
                    {t('about_anindya')}
                </Button>
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'link='/vpti'>
                    {t('about_vpti')}
                </Button>
            </div>
        </div> 
        : 
        <div className="hero-container">
            <video src={vid} autoPlay muted loop />
            <h1>{t('hero_title')}</h1>
            <h1>{t('hero_title2')}</h1>
            <p>{t('hero_subtitle')}</p>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large' link='/our-company'>
                    {t('about_anindya')}
                </Button>
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'link='/vpti'>
                    {t('about_vpti')}
                </Button>
            </div>
        </div>
    )
}

export default Hero
