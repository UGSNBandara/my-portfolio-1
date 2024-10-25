import React from "react";
import './Contact.css'
import mail_icon from '../../assets/mail_icon.svg'
import call_icon from '../../assets/call_icon.svg'
import location_icon from '../../assets/location_icon.svg'

const Contact = () => {
    return (
        <div className="contact">
            <div className="contact-title">
                <h1>Contact</h1>
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's talk</h1>
                    <p>gonna add a text latter here</p><br />
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mail_icon} alt="" />
                            <p>sulithanb@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                            <img src={call_icon} alt="" />
                            <p>0714262972</p>
                        </div>
                        <div className="contact-detail">
                            <img src={location_icon} alt="" />
                            <p>Chinabay, Trincomalee, Sri Lanka</p>
                        </div>
                    </div>
                </div>
                <div>
                    <form className="contact-right">
                        <label htmlFor="">Your Name</label>
                        <input type="text" placeholder="Enter your name" name="name" />
                        <label htmlFor="">Your Email</label>
                        <input type="email" placeholder="Enter your email" name="email" />
                        <label htmlFor="">Write your massage here</label>
                        <textarea name="massage" rows={8} placeholder="Enter your massage"></textarea>
                        <button type='submit' className="contact-submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact