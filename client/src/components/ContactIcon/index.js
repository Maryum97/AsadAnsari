import React, { useEffect } from 'react';
import './style.css';

// import aos dependencies here
import Aos from 'aos';
import 'aos/dist/aos.css';

// define styles here
const myStyles = {
    icon: {
        textAlign: 'center',
        padding: '9%',
        fontSize: '18pt',
        fontWeight: '600',
        height: '300px'
    },
    text: {
        textAlign: 'center',
    }
}

const ContactIcon = (props) => {
    useEffect(() => {
        Aos.init({ duration: 1000 })
    })

    return (
        <div
            data-aos='zoom-in'
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-delay="700"
            style={myStyles.icon}
        >
            <br></br>
            <div style={myStyles.text}>
                {props.text}
            </div>
            <br></br>
            <a href={props.reference}>
                <img src={props.icon} className='contact-icon'></img>
            </a>
        </div>
    )
}

export default ContactIcon;