import React from "react";
import './Hero.css'
import profile_img from '../../assets/my.png'

const Hero = () => {
    return (
        <div className='hero'>
            <img src={profile_img} alt="" />
            <h1><span>I'm Sulitha Nulaksha</span> <br /><div className="secondLine">Computer Engineering Undergraduate</div></h1>
            <p>Passionate about using technology to create, innovate, and make a difference.</p>
            <div className="hero-action">
                <div className="hero-connect">Connect With me</div>
                <div className="hero-resume">My resume</div>
            </div>
        </div>
    )
}

export default Hero