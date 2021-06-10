import React from 'react';
import { Container } from 'reactstrap';
import './style.css';

function Description(props) {
    return (
        <Container>
            <p>{props.paragraph}</p>
        </Container>
    )
}

export default Description;