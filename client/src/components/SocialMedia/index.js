import React, { useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';

// import aos dependencies here
import Aos from 'aos';
import 'aos/dist/aos.css';

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
    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, []);

    // define functions to set hover state of the icon size
    function onIcon(e) {
        e.target.style.opacity = '0.2';
    }

    function offIcon(e) {
        e.target.style.opacity = '1';
    }

    return (
        <div style={myStyles.style1}>
            <Container>
                <Row>
                    <Col xs='3'>
                        <a href='https://www.facebook.com/asadans4ri' target='_blank'>
                            <img
                                data-aos='zoom-in'
                                data-aos-easing="ease-in-out"
                                data-aos-mirror="true"
                                data-aos-once="false"
                                className='cIcon img-fluid'
                                onMouseOver={onIcon}
                                onMouseOut={offIcon}
                                src={Facebook}>

                            </img>
                        </a>
                    </Col>
                    <Col xs='3'>
                        <a href='https://twitter.com/asadans4ri' target='_blank'>
                            <img
                                data-aos='zoom-in'
                                data-aos-easing="ease-in-out"
                                data-aos-mirror="true"
                                data-aos-once="false"
                                className='cIcon img-fluid'
                                onMouseOver={onIcon}
                                onMouseOut={offIcon}
                                src={Twitter}>

                            </img>
                        </a>
                    </Col>
                    <Col xs='3'>
                        <a href='https://www.instagram.com/asadans4ri/' target='_blank'>
                            <img
                                data-aos='zoom-in'
                                data-aos-easing="ease-in-out"
                                data-aos-mirror="true"
                                data-aos-once="false"
                                className='cIcon img-fluid'
                                onMouseOver={onIcon}
                                onMouseOut={offIcon}
                                src={Instagram}>

                            </img>
                        </a>
                    </Col>
                    <Col xs='3'>
                        <a href='https://www.linkedin.com/in/asadansari1/' target='_blank'>
                            <img
                                data-aos='zoom-in'
                                data-aos-easing="ease-in-out"
                                data-aos-mirror="true"
                                data-aos-once="false"
                                className='cIcon img-fluid'
                                onMouseOver={onIcon}
                                onMouseOut={offIcon}
                                src={LinkedIn}>

                            </img>
                        </a>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default SocialMedia;