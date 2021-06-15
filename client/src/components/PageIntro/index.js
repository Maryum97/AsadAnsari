import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Logo from '../../Assets/AsadAnsariLionLogo.png';
import './style.css';

// import other components here
import Carousel from '../Carousel';

// import images here

function PageIntro() {
    return (
        <div className='page-intro'>
            <Container>
                <Row>
                    <Col xs='4'>
                        <br></br>
                        <br></br>
                        <br></br>
                        <Carousel />
                    </Col>

                    <Col xs='4'>
                        <br></br>
                        <div className='text'>
                            <b>Asad</b>Ansari
                        </div>
                        <img src={Logo}></img>
                    </Col>

                    <Col xs='4'>
                        <br></br>
                        <br></br>
                        <br></br>
                        <Carousel />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default PageIntro;