import React, { useState } from 'react'
import '../App.css'
import { Button } from './Button'
import { Link } from 'react-router-dom'
import './HeroSection.css'
import { useTranslation } from "react-i18next"
import vid from '../videos/home-hero.mov'

const Hero = () => {
    const { t } = useTranslation()

    return (
        <div className="hero-container">
            <video src={vid} autoPlay muted loop />
            <h1>{t('hero_title')}</h1>
            <h1>{t('hero_title2')}</h1>
            <p>{t('hero_subtitle')}</p>
            <div className="hero-btns">
                <Link to='/our-company'>
                    <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                        {t('about_anindya')}
                    </Button>
                </Link>
                <Link to="/vpti">
                    <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                        {t('about_vpti')}
                    </Button>
                </Link>
            </div>
        </div>
    )
}

export default Hero
