import React from 'react';
import { Container } from 'reactstrap';
import './style.css';

function Header(props) {
    return (
        <div className='header'>
            <div className='header-content'>
                <Container>
                    <h1><b>{props.header}</b></h1>
                </Container>
            </div>
        </div>
    )
}

export default Header;