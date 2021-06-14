import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Logo from '../../Assets/AsadAnsariLionLogo.png';
import './style.css';

function PageIntro() {
    return (
        <div className='page-intro'>
            <Container>
                <Row>
                    <Col xs='3'></Col>

                    <Col xs='6'>
                        <div className='text'>
                            <b>Asad</b>Ansari
                        </div>
                        <img src={Logo}></img>
                    </Col>

                    <Col xs='3'></Col>
                </Row>
            </Container>
        </div>
    )
}

export default PageIntro;