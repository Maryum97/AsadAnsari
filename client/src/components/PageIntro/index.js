import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Logo from '../../Assets/AsadAnsariLionLogo.png';
import './style.css';

// import other components here

// import images here

function PageIntro() {
    return (
        <div className='page-intro'>
            <Container>
                <Row>
                    <Col xs='4'>
                    </Col>

                    <Col xs='4'>
                        <br></br>
                        <div className='text'>
                            <b>Asad</b>Ansari
                        </div>
                        <img src={Logo}></img>
                    </Col>

                    <Col xs='4'>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default PageIntro;