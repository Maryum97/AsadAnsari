import React from 'react';
import './style.css';

function Header(props) {
    return (
        <div class='header'>
            <div class='header-content'>
                <h1>{props.header}</h1>
                <h3>{props.info}</h3>
            </div>
        </div>
    )
}

export default Header;