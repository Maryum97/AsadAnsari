import React from 'react';
import Description from '../Description';
import { Container, Row, Col } from 'reactstrap';
import ImageQuote from '../../Assets/Screenshot_20210524-180312_Instagram.jpg'
import './style.css';

const myStyle = {
    styleImage: {
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    styleQuote: {
        fontWeight: '500',
        fontStyle: 'italic'
    }
}

function Quotation() {
    return (
        <Container>
            <div
                className='quotation'
                data-aos='fade-up'
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-delay='200'
            >

                <div className='quote-image'>
                    <br></br>
                    <img
                        src={ImageQuote}
                        style={myStyle.styleImage}
                        className="img-fluid"
                        data-aos='zoom-in'
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        data-aos-delay="700"
                    >

                    </img>
                </div>

                <div className='quote-text'>
                    <div
                        className='quote'
                        style={myStyle.styleQuote}
                        data-aos='flip-up'
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        data-aos-delay="1300"
                    >
                        <Description
                            paragraph='“Philanthropy is a huge part of my life. It fills a gap for me. The more I help others, the more it pays off personally. In a small way, I’m trying to help make a lasting impact in others’ lives. All the initiatives I’m working on with trustable charities in different sectors, help me do that."'
                        />
                        <Description paragraph='~ Asad Ansari' />
                    </div>
                </div>
            </div>
        </Container >
    )
}

export default Quotation;