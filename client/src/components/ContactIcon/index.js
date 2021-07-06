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
        height: '500px'
    },
    text: {
        textAlign: 'center',
        marginTop: '100pt',
        marginBottom: '-60pt',
        fontSize: '25pt',
        fontWeight: '600'
    }
}

// define functions to set hover state of the icon size
function onIcon(e) {
    e.target.style.opacity = '0.2';
}

function offIcon(e) {
    e.target.style.opacity = '1';
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
        >
            <div style={myStyles.text}>
                {props.text}
            </div>
            <div
                data-aos='zoom-in'
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-delay="700"
                onMouseOver={onIcon}
                onMouseOut={offIcon}
                style={myStyles.icon}
            >
                <br></br>
                <a href={props.reference}>
                    <img src={props.icon} className='contact-icon'></img>
                </a>
            </div>
        </div>
    )
}

export default ContactIcon;