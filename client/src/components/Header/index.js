import React, { useEffect } from 'react';
import './style.css';

// import aos dependencies here
import Aos from 'aos';
import 'aos/dist/aos.css';

const Header = (props) => {
useEffect(() => {
    Aos.init({ duration: 2000 })
}, []);

    return (
        <div className='header'>
                <h1 className='header-text'><b>{props.header}</b></h1>
        </div>
    )
}

export default Header;