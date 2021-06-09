import React from 'react';
import './style.css';
import { Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Footer() {
    return (
        <footer>
                <Row>
                    <Col xs='9'>© Copyright Asad Ansari 2021</Col>
                    <Col xs='3'>
                        Follow me on social media:<br></br>
                        <a href="" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
                        <span>  </span>
                        <a href="" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>

                    </Col>
                </Row>
        </footer>
    );
}

export default Footer;