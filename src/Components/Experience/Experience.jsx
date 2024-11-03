import React from 'react'
import './Experience.css'
import experience from '../../assets/experience.js'
import arrow_icon from '../../assets/arrow_icon.svg'

const Experience = () => {
    return (
        <div id='experience' className='myexperience'>
            <div className='myexperience-title'>
                <h1>My Experience</h1>
            </div>
            <div className="myexperience-container">
                {experience.map((work,index)=>{
                    return <img key={index} src={work.w_img} alt=''/>
                })}
            </div>
            <div>
                <div className="myexperience-showmore">
                    <p>Show More</p>
                    <img src={arrow_icon} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Experience