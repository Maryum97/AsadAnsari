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
                <NavbarBrand href="/"><h1 className='text'><b>Asad</b>Ansari</h1></NavbarBrand>
            </Navbar>
        </div>
    );
}

export default MainNavbar;