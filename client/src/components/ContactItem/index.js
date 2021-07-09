import React, { useEffect, useRef, useState } from 'react';
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

    // define state variables for copy button to work
    const [copySucess, setCopySuccess] = useState('');
    const textAreaRef = useRef(null);

    // function to render sucess message
    function successMsg(showAlert) {
        if (showAlert) {
            return (
                <div className='success-msg'>
                    <button
                        className='cross'
                        onClick={closeMsg}
                    >
                        X
                    </button>
                    <h3 className='success-text'>
                        Copied!
                    </h3>
                </div>
            )
        }

        else {
            return (
                <div></div>
            )
        }
    }

    // funtion to chnage the state of the success message
    function closeMsg() {
        setCopySuccess(successMsg(false));
    }

    // function to copy text and make success message appear
    function copyToClipboard(e) {
        textAreaRef.current.select();
        document.execCommand('copy');
        e.target.focus();
        setCopySuccess(successMsg(true));
    }

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
                ref={textAreaRef}
                value={props.item}
            >
            </textarea>
            <br></br>
            <button
                onClick={copyToClipboard}
                style={myStyles.button}
            >
                Copy Email
            </button>
            <br></br>
            {copySucess}
        </div>
    )
}

export default ContactItem;