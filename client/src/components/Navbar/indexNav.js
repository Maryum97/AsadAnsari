import React, { useState } from 'react';
import { MenuItems } from './MenuItems';
import './styleNav.css';

// define styles here
const myStyles = {
    navbar: {
        zIndex: '1',
        backgroundColor: 'transparent',
        position: 'fixed',
        marginTop: '0px',
        width: '100%'
    }
}

const Navbar = () => {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(!clicked)
    }

    return (
        <div style={myStyles.navbar}>
            <nav className='NavbarItems'>
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