import React from 'react';
import { Container } from 'reactstrap';

function Description(props) {
    return (
        <Container>
            <p>{props.paragraph}</p>
        </Container>
    )
}

export default Description;