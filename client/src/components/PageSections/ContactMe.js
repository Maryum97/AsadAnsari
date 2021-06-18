import React from 'react';

// import components here
import Description from '../Description';

// define styles here
const myStyles = {
    contact: {
        backgroundColor: 'rgb(221, 185, 94)',
        height: '3000px'
    }
}

function ContactMe() {
    return (
        <div className='contact' style={myStyles.contact}>
            <Description
                paragraph='Feel free to get in touch via my email or social media.'
            />
            <Description
                paragraph='contact@asadansari.org'
            />
            <br></br>
            <br></br>
        </div>
    )
}

export default ContactMe;