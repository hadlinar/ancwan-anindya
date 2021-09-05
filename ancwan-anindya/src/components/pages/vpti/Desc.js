import React from 'react'
import './Desc.css'
import { useTranslation } from "react-i18next"

function Desc() {
    const { t } = useTranslation()

    return (
        <>
            <div className='container-desc'>
                <p className='about-vpti'>{t('desc_vpti')}</p>
            </div>
            
        </>
    )
}

export default Desc
