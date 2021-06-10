import React from 'react';
import { Container } from 'reactstrap';
import './style.css';

function Description(props) {
    return (
        <Container>
            <p><b>{props.heading}</b></p>
            <p>{props.paragraph}</p>
        </Container>
    )
}

export default Description;