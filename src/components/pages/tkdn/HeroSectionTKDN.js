import React, { useState, useEffect } from 'react'
import '../../../App.css'
import { ButtonTKDN } from '../../Button'
import './HeroSectionTKDN.css'
import { useTranslation } from "react-i18next"

function HeroSectionTkdn() {
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
        <div className="hero-container-tkdn-mobile">
            <h1>{t('tkdn_system')}</h1>
            <p>{t('sub_tkdn')}</p>
            <div className="hero-btns">
                <ButtonTKDN className='btns' buttonStyle='btn--primary' buttonSize='btn--large' pathn='https://avs.anindya.biz/'>
                    {t('button_tkdn')}
                </ButtonTKDN>
            </div>
        </div>
        : 
        <div className="hero-container-tkdn">
            <h1>{t('tkdn_system')}</h1>
            <p>{t('sub_tkdn')}</p>
            <div className="hero-btns">
                <ButtonTKDN className='btns' buttonStyle='btn--primary' buttonSize='btn--large' pathn='https://avs.anindya.biz/'>
                    {t('button_tkdn')}
                </ButtonTKDN>
            </div>
        </div>
    )
}

export default HeroSectionTkdn
