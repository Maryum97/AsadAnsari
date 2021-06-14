import React, { useState } from 'react';
import {
    Navbar,
    NavbarBrand
} from 'reactstrap';
import './style.css'

const MainNavbar = () => {
    return (
        <div>
            <Navbar expand="md" className='navbar'>
                <NavbarBrand href="/"><h2 className='logo'><b>A</b>A</h2></NavbarBrand>
            </Navbar>
        </div>
    );
}

export default MainNavbar;