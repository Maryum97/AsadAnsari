import React, { useEffect } from 'react';
import './style.css';

// import aos dependencies here
import Aos from 'aos';
import 'aos/dist/aos.css';

// define styles here
const myStyles = {
    item: {
        textAlign: 'center',
        padding: '11%',
        fontSize: '21pt',
        fontWeight: '700',
        height: '200px',
        marginTop: '100px',
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    button: {
        backgroundColor: 'rgb(133, 39, 39)',
        color: 'white',
        fontSize: '16pt',
        padding: '2%'
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
            className='item-for-contact'
            style={myStyles.item}
        >
            <textarea
                value={props.item}
            >
            </textarea>
            <br></br>
            <button 
                style={myStyles.button}
            >
                Copy Email
            </button>
        </div>
    )
}

export default ContactItem;