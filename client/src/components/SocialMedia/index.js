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
                                className='img-fluid'
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
                                data-aos-delay="200"
                                className='img-fluid'
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
                                data-aos-delay="400"
                                className='img-fluid'
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
                                data-aos-delay="600"
                                className='img-fluid'
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