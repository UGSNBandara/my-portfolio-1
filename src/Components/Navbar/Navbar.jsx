import React, { useRef, useState } from "react";
import './Navbar.css'
import logo from '../../assets/my_logo.png'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

const Navbar = () => {
    const [activeItem, setActiveItem] = useState("#home");
    const menuRef = useRef();

    const openMenu = () => {
        menuRef.current.style.right="0";
    }

    const closeMenu = () => {
        menuRef.current.style.right="-390px";
    }

    const handleItemClick = (item) => {
        setActiveItem(item);
    }

    

    return (
        <div id= "home" className='navbar'>
            <img src={logo} alt="logo" className="logo" />
            <img src={menu_open} onClick={openMenu}  alt="" className="nav-mob-open"/>
            <ul ref={menuRef} className="nav-menu">
                <img src={menu_close} onClick={closeMenu} alt="" className="nav-mob-close"/>
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
                <li
                >

                    <AnchorLink className="anchor-link" offset={50} href="#experience"><p className={activeItem == "experience" ? "active" : ""}
                        onClick={() => handleItemClick("experience")}>Experience</p></AnchorLink>
                </li>
            </ul>
            <div className="nav-connect"><AnchorLink  className="nav-connect-anchor" offset={50} href="#contact">Connect With Me</AnchorLink></div>
        </div>
    )
}

export default Navbar