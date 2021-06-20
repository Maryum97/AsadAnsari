import React from 'react';

// define styles here
const myStyles = {
    style1: {
        padding: '10%',
        height: '500px',
        textAlign: 'center',
        marginTop: '100px'
    }
}

const SocialMedia = () => {
    return (
        <div style={myStyles.style1}>
            Facebook
            Twitter
            Instagram
            LinkedIn

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