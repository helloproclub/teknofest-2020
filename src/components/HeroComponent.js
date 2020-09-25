import React from 'react';
import logo from './../assets/images/Logo.png';
const HeroComponent = () => {
    return (
        <div className="hero-overlay">
            <div className="hero-logo">
                <img src={logo} width="80%" />
            </div>            
        </div>
    )
}

export default HeroComponent
