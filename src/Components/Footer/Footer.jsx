import React from "react";
import './Footer.css'
import footer_logo from '../../assets/my_logo.png'
import user_icon from '../../assets/user_icon.svg'

const Footer =() => {
    return(
        <div className="footer">
            <div className="footer-top">
                <div className="footer-top-left">
                    <img src={footer_logo} alt="" />
                    <p>I am sulitha, and i am gonna add here some discription of me</p>
                </div>
                <div className="footer-top-right">
                    <div className="footer-email-input">
                        <img src={user_icon} alt="" />
                        <input type="email" placeholder="Enter your email" />
                    </div>
                    <div className="footer-subscribe">Subscribe</div>
                </div>
            </div>
            <hr />
            <div className="footer-bottom">
                <p className="footer-bottom-right">© 2024 Sulitha Nulaksha. All rights reserved.</p>
                <div className="footer-bottom-right">
                    <p>Thank you for visiting me</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
