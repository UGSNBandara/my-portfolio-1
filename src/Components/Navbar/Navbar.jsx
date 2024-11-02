import React, { useState } from "react";
import './Navbar.css'
import logo from '../../assets/my_logo.png'
import AnchorLink from 'react-anchor-link-smooth-scroll';



const Navbar = () => {
    const [activeItem, setActiveItem] = useState("#home");

    const handleItemClick = (item) => {
        setActiveItem(item);
    }

    return (
        <div className='navbar'>
            <img src={logo} alt="logo" className="logo" />
            <ul className="nav-menu">
                <li
                >
                    <AnchorLink className="anchor-link" href="#home"><p className={activeItem == "home" ? "active" : ""}
                        onClick={() => handleItemClick("home")}>Home</p></AnchorLink>
                </li>
                <li
                >

                    <AnchorLink className="anchor-link" offset={50} href="#about"><p className={activeItem == "about" ? "active" : ""}
                        onClick={() => handleItemClick("about")}>About Me</p></AnchorLink>                </li>
                <li
                >

                    <AnchorLink className="anchor-link" offset={50} href="#projects"><p className={activeItem == "projects" ? "active" : ""}
                        onClick={() => handleItemClick("projects")}>My Projects</p></AnchorLink>
                </li>
                <li
                >

                    <AnchorLink className="anchor-link" offset={50} href="#contact"><p className={activeItem == "contact" ? "active" : ""}
                        onClick={() => handleItemClick("contact")}>Contact</p></AnchorLink>
                </li>
            </ul>
            <div className="nav-connect"><AnchorLink className="nav-connect-anchor" offset={50} href="#contact">Connect With Me</AnchorLink></div>
        </div>
    )
}

export default Navbar