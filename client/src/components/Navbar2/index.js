import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import './style.css'

const MainNavbar = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="light" light expand="md" className='navbar2'>
                <NavbarBrand href="/"></NavbarBrand>
                <NavbarToggler onClick={toggle} className='mr-2'/>
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="#about">About Me</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#business">Business</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#philanthropy">Philanthropy</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#awards">Awards</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#contact">Contact Me</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default MainNavbar;