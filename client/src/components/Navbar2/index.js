import React, { useState } from 'react';
import './style.css'

const NavLinks = (props) => {

    return (
        <div className='card'>
            <div className='list-group'>
                <a href="#about" className="list-group-item list-group-item-action">About Me</a>
                <a href="#business" className="list-group-item list-group-item-action">Business</a>
                <a href="#philanthropy" className="list-group-item list-group-item-action">Philanthropy</a>
                <a href="#awards" className="list-group-item list-group-item-action">Awards</a>
                <a href="#contact" className="list-group-item list-group-item-action">Contact Me</a>
                <a href='#page' className="list-group-item list-group-item-action">Back To Top</a>
            </div>
        </div>
    );
}

export default NavLinks;