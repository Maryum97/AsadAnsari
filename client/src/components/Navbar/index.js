import React, { useState } from 'react';
import {
    Navbar,
    NavbarBrand
} from 'reactstrap';
import './style.css'

// import other components here
import Navbar2 from '../Navbar2';

// define styles here
const myStyles = {
    navbar: {
        zIndex: '1',
        position: 'fixed',
        marginTop: '0px',
        width: '100%',
        height: '110px',
        maxHeight: '35vh',
        textAlign: 'center'
    }
}

const MainNavbar = () => {
    // define state variables here
    const [colorChange, setColorChange] = useState(false);

    // define function to change color
    const changeNavColor = () => {
        if (window.scrollY >= 110) {
            setColorChange(true);
        }
        else {
            setColorChange(false);
        }
    }

    window.addEventListener('scroll', changeNavColor);

    return (
        <div>
            <Navbar
                expand="md"
                className={colorChange ? 'navbar active' : 'navbar'}
                style={myStyles.navbar}
            >
                <NavbarBrand href="/"><h1 className='nav-text'><b>Asad</b>Ansari</h1></NavbarBrand>
            </Navbar>
            <Navbar2 />
        </div>
    );
}

export default MainNavbar;