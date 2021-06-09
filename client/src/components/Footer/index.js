import React from 'react';
import './style.css';
import { Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Footer() {
    return (
        <footer>
                <Row>
                    <Col xs='9'>© Copyright Asad Ansari 2021</Col>
                    <Col xs='3'>
                        Follow me on social media:<br></br>
                        <a href="" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebook} /></a>
                        <span>  </span>
                        <a href="" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faTwitter} /></a>
                        <span>  </span>
                        <a href="" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
                        <span>  </span>
                        <a href="" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>

                    </Col>
                </Row>
        </footer>
    );
}

export default Footer;