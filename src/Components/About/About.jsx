import React from "react";
import './About.css'
import profile_image from '../../assets/my.png'

const About = () => {
    return (
        <div id="about" className="about">
            <div className="about-title">
                <h1>About me</h1>
            </div>
            <div className="about-section">
                <div className="about-left">
                    <img src={profile_image} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-paragraph">
                        <p>This part it just to test the viisibility, and i will upload the correct part later.</p>
                        <p>This part it just to test the viisibility, and i will upload the correct part later.</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill">
                            <p>Sci-kit Learn</p><hr style={{ width: "60%" }}></hr>
                        </div>
                        <div className="about-skill">
                            <p>Tensorflow</p><hr style={{ width: "35%" }}></hr>
                        </div>
                        <div className="about-skill">
                            <p>Unity - 2D Games</p><hr style={{ width: "50%" }}></hr>
                        </div>
                        <div className="about-skill">
                            <p>Unity - 3D Games</p><hr style={{ width: "20%" }}></hr>
                        </div>
                        <div className="about-skill">
                            <p>C#</p><hr style={{ width: "30%" }}></hr>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-achivements">
                <div className="about-achivement">
                    <h1>1</h1>
                    <p>Projects Completed</p>
                </div>
                <hr />
                <div className="about-achivement">
                    <h1>3+</h1>
                    <p>Month of Experience</p>
                </div>
                <hr />
                <div className="about-achivement">
                    <h1>3.91</h1>
                    <p>C - GPA</p>
                </div>
                <hr />
            </div>
        </div>
    )
}

export default About