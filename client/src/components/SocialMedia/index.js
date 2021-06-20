import React from 'react';
import { Container, Row, Col } from 'reactstrap';

// import contact icons here
import Facebook from '../../Assets/Contact-Icons/facebook.png';
import Twitter from '../../Assets/Contact-Icons/twitter.png';
import Instagram from '../../Assets/Contact-Icons/instagram.png';
import LinkedIn from '../../Assets/Contact-Icons/linkedin.png'

// define styles here
const myStyles = {
    style1: {
        padding: '22%',
        height: '500px',
        textAlign: 'center',
        marginTop: '400px'
    }
}

const SocialMedia = () => {
    return (
        <div style={myStyles.style1}>
            <Container>
                <Row>
                    <Col xs='3'>
                        <a href='' target='_blank'>
                            <img className='img-fluid' src={Facebook}></img>
                        </a>
                    </Col>
                    <Col xs='3'>
                        <a href='' target='_blank'>
                            <img className='img-fluid' src={Twitter}></img>
                        </a>
                    </Col>
                    <Col xs='3'>
                        <a href='' target='_blank'>
                            <img className='img-fluid' src={Instagram}></img>
                        </a>
                    </Col>
                    <Col xs='3'>
                        <a href='' target='_blank'>
                            <img className='img-fluid' src={LinkedIn}></img>
                        </a>
                    </Col>
                </Row>
            </Container>

            {/* <Row>
                <Col xs='12'>
                    <a href="" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebook} /></a>
                    <span>  </span>
                    <a href="" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faTwitter} /></a>
                    <span>  </span>
                    <a href="" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
                    <span>  </span>
                    <a href="https://www.linkedin.com/company/11423901/admin/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>

                </Col>
            </Row> */}
        </div>
    )
}

export default SocialMedia;