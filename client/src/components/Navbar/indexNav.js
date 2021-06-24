import React, { useState } from 'react';
import { MenuItems } from './MenuItems';
import './styleNav.css';

// define styles here
const myStyles = {
    navbar: {
        zIndex: '1',
        position: 'fixed',
        marginTop: '0px',
        width: '100%'
    }
}

const Navbar = () => {
    // states for fa-icons
    const [clicked, setClicked] = useState(false);

    // states for navbar color-change
    const [navbar, setNavbar] = useState(false);

    // function to handle click event for fa-icons
    const handleClick = () => {
        setClicked(!clicked)
    }

    // function to change navbar color
    const changeNavbarColor = () => {
        if (window.scrollY >= 110) {
            setNavbar(true);
        }
        else {
            setNavbar(false);
        }
    }

    // change color ON SCROLL
    window.addEventListener('scroll', changeNavbarColor);

    return (
        <div>
            <nav className={navbar ? 'NavbarItems active' : 'NavbarItems'} style={myStyles.navbar}>
                <h1 className='navbar-logo'>
                    <b>Asad</b>Ansari
                </h1>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a
                                    className={item.cName}
                                    href={item.url}
                                >
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;