import React, { useEffect } from 'react';

// import aos dependencies here
import Aos from 'aos';
import 'aos/dist/aos.css';

// define styles here
const myStyles = {
    icon: {
        textAlign: 'center',
        padding: '9%',
        fontSize: '48pt',
        fontWeight: '600',
        height: '1000px'
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
            data-aos-delay="600"
            style={myStyles.icon}
        >
            <a href={props.reference}>
                <img src={props.icon}></img>
            </a>
        </div>
    )
}

export default ContactIcon;