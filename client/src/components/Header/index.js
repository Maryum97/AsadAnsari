import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Container } from 'reactstrap';
import './style.css';

function Header(props) {

    // when component mounts, apply global animations to the divs
    useEffect(() => {
        Aos.init({ duration: 5000 });
    }, []);

    return (
        <div data-aos='fade-up' className='header'>
            <div className='header-content'>
                <Container>
                    <h1 data-aos='fade-up'><b>{props.header}</b></h1>
                </Container>
            </div>
        </div>
    )
}

export default Header;