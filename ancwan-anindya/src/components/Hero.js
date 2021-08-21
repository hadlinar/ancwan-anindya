import React, { useState } from 'react'
import '../App.css'
import { Button } from './Button'
import { Link } from 'react-router-dom'
import './HeroSection.css'
import { useTranslation } from "react-i18next"
import vid1 from '../videos/home1-hero.mp4'
import vid2 from '../videos/home2-hero.mp4'

const Hero = () => {
    const { t } = useTranslation()
    const [currentVidId, setId] = useState(0)

    const vids = [
        vid1, vid2
    ]

    const handleEnded = (e) => {
        const nextVidId = (currentVidId + 1) % vids.length
        setId(nextVidId);
    }

    return (
        <div className="hero-container">
            <video src={vids[currentVidId]} autoPlay muted onEnded={handleEnded} />
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
