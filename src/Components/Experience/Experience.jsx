import React from 'react'
import './Experience.css'
import mywork_data from '../../assets/experience'
import arrow_icon from '../../assets/arrow_icon.svg'

const MyProjects = () => {
    return (
        <div id='projects' className='myexperience'>
            <div className='myexperience-title'>
                <h1>My Latest Projects</h1>
            </div>
            <div className="myexperience-container">
                {mywork_data.map((work,index)=>{
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

export default MyProjects