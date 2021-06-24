import React, { Component } from 'react';
import { MenuItems } from './MenuItems';
import './styleTest.css';

// define styles here
const myStyles = {
    navbar: {
        zIndex: '1',
        position: 'fixed',
        marginTop: '0px',
        width: '100%'
    }
}

class Navbar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return (
            <div style={myStyles.navbar}>
                <nav className='NavbarItems'>
                    <h1 className='navbar-logo'>
                        <b>Asad</b>Ansari
                    </h1>
                    <div className='menu-icon' onClick={this.handleClick}>
                        <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </div>
                    <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
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
}

export default Navbar;