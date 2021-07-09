import React from 'react';
import './style.css';
import { Row, Col } from 'reactstrap';

// define styles here
const myStyles = {
    textAlign: 'center',
    fontWeight: 'bold'
}

function Footer() {
    return (
        <footer>
                <Row style={myStyles}>
                    <Col xs='12'>© Copyright Asad Ansari 2021</Col>
                </Row>
        </footer>
    );
}

export default Footer;