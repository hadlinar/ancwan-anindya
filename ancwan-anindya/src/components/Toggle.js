import React from 'react'
import './Toggle.css'

function Toggle({ toggled, onClick }) {
    return (
        <>
            <div onClick={onClick} className="toggle">
                <div className={`notch${toggled ? " id" : ""}`} />
                <div>
                    {
                        toggled ? 
                        <div className="shape id"> EN </div> :
                        <div className="shape sm"> ID </div> 
                    }
                </div>
            </div>  
        </>
    )
}

export default Toggle
