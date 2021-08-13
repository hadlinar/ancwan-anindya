import React from 'react'
import './Toggle.css'

function Toggle({ toggled, onClick }) {
    toggled = JSON.parse(localStorage.getItem('toggled'))
    console.log(toggled)
    return (
        <>
            <div onClick={onClick} className="toggle">
                <div className={`notch${toggled ? " id": ""}`} />
                <div>
                    {   
                        toggled ? <div className="shape id"> ID </div> : <div className="shape sm"> EN </div>
                    }
                </div>
            </div>  
        </>
    )
}

export default Toggle
