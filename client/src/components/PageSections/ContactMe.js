import React from 'react';

// import components here
import Header from '../Header'
import ContactItem from '../ContactItem';
import ContactIcon from '../ContactIcon';
import SocialMedia from '../SocialMedia';

// import images here
import Icon1 from '../../Assets/Email.png';
import Icon2 from '../../Assets/Arrow.png';

// define styles here
const myStyles = {
    contact: {
        backgroundColor: 'rgb(221, 185, 94)',
        height: '3700px'
    },
    padding: {
        height: '1000px'
    }
}

const ContactMe = () => {

    return (
        <div className='contact' style={myStyles.contact}>
            <Header header='Contact Me' />

            <div className='email' style={myStyles.padding}>
                <br></br>
                <ContactIcon
                    className='contactIcon'
                    text='Drop me an email here:'
                    reference='#email'
                    icon={Icon1}
                />
            </div>
            <div id='email'>
                <ContactItem
                    item='contact@asadansari.org' />
            </div>
            <div style={{ marginTop: '200pt' }}>
                <ContactIcon
                    className='contactIcon'
                    text='Find me on my social media here:'
                    reference='#social-media'
                    icon={Icon2}
                />
            </div>
            <div id='social-media'>
                <SocialMedia />
            </div>
        </div>
    )
}

export default ContactMe;