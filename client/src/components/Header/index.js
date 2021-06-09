import React from 'react';
import { Container } from 'reactstrap';
import './style.css';

function Header(props) {
    return (
        <div class='header'>
            <div class='header-content'>
                <Container>
                    <h1>{props.header}</h1>
                </Container>
            </div>
        </div>
    )
}

export default Header;