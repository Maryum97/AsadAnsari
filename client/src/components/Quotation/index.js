import React from 'react';
import Description from '../Description';
import { Container, Row, Col } from 'reactstrap';
import ImageQuote from '../../Assets/Screenshot_20210524-180312_Instagram.jpg'
import './style.css';

const myStyle = {
    display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '180px',
        height: '180px'
}

function Quotation() {
    return (
        <Container>
            <div className='quotation'>
                <Row>
                    <Col xs='3'>
                        <br></br>
                        <img src={ImageQuote} style={myStyle}></img>
                    </Col>
                    <Col xs='2'></Col>
                    <Col xs='7'>
                        <div className='quote'>
                            <Description paragraph='“Philanthropy is a huge part of my life. It fills a gap for me. The more I help others, the more it pays off personally. In a small way, I’m trying to help make a lasting impact in others’ lives. All the initiatives I’m working on with trustable charities in different sectors, help me do that."' />
                            <Description paragraph='~ Asad Ansari' />
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>
    )
}

export default Quotation;