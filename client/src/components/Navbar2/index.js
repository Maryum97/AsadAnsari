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
                <NavbarToggler onClick={toggle} classname='mr-2'/>
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="/">About Me</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/">Business</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/">Philanthropy</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/">Awards</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/">Contact Me</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default MainNavbar;