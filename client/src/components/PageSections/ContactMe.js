import React from 'react';

// import components here
import Header from '../Header';
import Description from '../Description';

function ContactMe() {
    return (
        <div>
            <Header header='Contact Me' />
            <br></br>
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