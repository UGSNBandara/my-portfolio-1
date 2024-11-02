import React from "react";
import './Hero.css'
import profile_img from '../../assets/my.png'
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
    return (
        <div className='hero'>
            <img src={profile_img} alt="" />
            <h1><span>I'm Sulitha Nulaksha</span> <br /><div className="secondLine">Computer Engineering Undergraduate</div></h1>
            <p>Passionate about using technology to create, innovate, and make a difference.</p>
            <div className="hero-action">
                <div className="hero-connect"><AnchorLink className="hero-connect-anchor" offset={50} href="#contact">Connect With me</AnchorLink></div>
                <div className="hero-resume">Download CV</div>
            </div>
        </div>
    )
}

export default Hero