import React from 'react'
import './Desc.css'
import { useTranslation } from "react-i18next"

function Desc() {
    const { t } = useTranslation()

    return (
        <>
            <div className='container-desc-tkdn'>
                <p className='about-tkdn'>{t('desc_tkdn')}</p>
            </div>
            
        </>
    )
}

export default Desc
