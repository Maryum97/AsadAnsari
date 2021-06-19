import React, { useEffect } from 'react';

// import aos dependencies here
import Aos from 'aos';
import 'aos/dist/aos.css';

// define styles here
const myStyles = {
    item: {
        textAlign: 'center',
        padding: '12%',
        fontSize: '48pt',
        fontWeight: '600',
        height: '1000px'
    }
}

const ContactItem = (props) => {
    useEffect(() => {
        Aos.init({ duration: 1000 })
    })

    return (
        <div
            data-aos='zoom-in'
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-delay="300"
            style={myStyles.item}
        >
            {props.item}
        </div>
    )
}

export default ContactItem;