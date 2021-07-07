import React from 'react';
import { Row, Col } from 'reactstrap';
import './style.css';

// import images here
import Logo from '../../Assets/AsadAnsariLionLogo.png';
import AsadBgIm from '../../Assets/Asad-Ansari-1280x640.jpg';

const myStyles = {
    bgIm: {
        backgroundImage: `url(${AsadBgIm})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        animation: 'fadeIn 5s',
        opacity: '0.9',
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    logoIm: {
        marginTop: '30px'
    }
}

function PageIntro() {
    return (
        <div className='page-intro' style={myStyles.bgIm}>
            <Row>
                <Col xs='8'>
                </Col>

                <Col xs='4'>
                    <br></br>
                    <img className='logo-img img-fluid' style={myStyles.logoIm} src={Logo}></img>
                </Col>
            </Row>
        </div>
    )
}

export default PageIntro;