import React, { useState, useEffect } from 'react'
import './Compliance.css'
import { useTranslation } from "react-i18next";

function Compliance() {
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
        <>
            {
                mobile ? 
                    <div className='container-about'>
                        <p style={{textAlign: "left", padding: "20px 0 0 0", }}>
                            {t('compliance_iso')}
                        </p>
                        <div>
                            <p style={{textAlign: "left", padding: "0 0 10px 0", }}>
                                <a href={'https://drive.google.com/file/d/1Y1yhEsbds7TBdfzubXL7Gl7Hy3zJxzXs/view'} target='_blank' className='clickable'>{t('compliance_policy')}</a>
                            </p>
                        </div>
                        <p className='content-compliance'>
                            {t('compliance_1')}
                        </p>
                        <p className='content-compliance'>
                            {t('compliance_2')}<a className='clickable' href={'https://forms.gle/SVWY2UF9G2YsuxPV9'} target='_blank'> {t('compliance_click')} </a>{t('compliance_2_cont')}
                        </p>
                        <p className='content-compliance'>
                            {t('compliance_thanks')}
                        </p>
                    </div>
                :   
                <>
                    <div>
                        <p className='content-compliance'>
                            {t('compliance_iso')}
                        </p>
                        <div>
                            <p style={{textAlign: "left", padding: "0 0 10px 0", }}>
                                <a href={'https://drive.google.com/file/d/1Y1yhEsbds7TBdfzubXL7Gl7Hy3zJxzXs/view'} target='_blank' className='clickable'>{t('compliance_policy')}</a>
                            </p>
                        </div>
                        <p className='content-compliance'>
                            {t('compliance_1')}
                        </p>
                        <p className='content-compliance'>
                            {t('compliance_2')}<a className='clickable' href={'https://forms.gle/SVWY2UF9G2YsuxPV9'} target='_blank'> {t('compliance_click')} </a>{t('compliance_2_cont')}
                        </p>
                        <p className='content-compliance'>
                            {t('compliance_thanks')}
                        </p>
                    </div>
                </>
            }
        </>
    )
}

export default Compliance