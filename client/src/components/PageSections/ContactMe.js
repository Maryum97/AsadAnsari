import React from 'react';
import { Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

// import components here
import Header from '../Header'
import Description from '../Description';
import ContactItem from '../ContactItem';
import ContactIcon from '../ContactIcon';

// import images here
import Icon1 from '../../Assets/Email.png'

// define styles here
const myStyles = {
    contact: {
        backgroundColor: 'rgb(221, 185, 94)',
        height: '5000px'
    },
    follow: {
        textAlign: 'center'
    },
    padding: {
        height: '1000px'
    }
}

function ContactMe() {
    return (
        <div className='contact' style={myStyles.contact}>
            <Header header='Contact Me' />

            <div className='email' style={myStyles.padding}>
                <br></br>
                <br></br>
                <br></br>
                <Description
                    paragraph='Click below and get in touch via my email:'
                />
                <ContactIcon
                    reference='#email'
                    icon={Icon1}
                />
            </div>
            <div id='email'>
                <ContactItem
                    item='contact@asadansari.org' />
            </div>

            <br></br>
            {/* <Row style={myStyles.follow}>
                <Col xs='12'>
                    <Description
                        paragraph='Follow me on social media:'
                    />
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

export default ContactMe;