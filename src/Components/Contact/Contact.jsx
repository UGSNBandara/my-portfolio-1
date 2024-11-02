import React from "react";
import './Contact.css'
import mail_icon from '../../assets/mail_icon.svg'
import call_icon from '../../assets/call_icon.svg'
import location_icon from '../../assets/location_icon.svg'

const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "39e56425-856b-405f-9a59-5e1397e50cb0");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            alert(data.message)
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <div id="contact" className="contact">
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
                    <form onSubmit= {onSubmit} className="contact-right">
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