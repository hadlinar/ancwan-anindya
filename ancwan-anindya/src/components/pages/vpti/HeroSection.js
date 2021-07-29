import React from 'react'
import '../../../App.css'
import { Button } from '../../Button'
import { Link } from 'react-router-dom'
import './HeroSection.css'

function HeroSectionVpti() {

    return (
        <div className="hero-container-vpti">
            <h1>ANINDYA VPTI System</h1>
            <p>Our service network from branch, laboratory, and office to provide super services for our customers</p>
            <div className="hero-btns">
                <Link to={{ pathname: "https://avs.anindya.biz/" }} target="_blank">
                    <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                        LOGIN VPTI SYSTEM
                    </Button>
                </Link>
            </div>
        </div>
    )
}

export default HeroSectionVpti
