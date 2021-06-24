import React from 'react';

// import components here
import Navbar from '../components/Navbar/indexTest';
import Footer from '../components/Footer';
import PageIntro from '../components/PageIntro';

// import page sections here
import AboutMe from '../components/PageSections/AboutMe';
import Business from '../components/PageSections/Business';
import Philanthropy from '../components/PageSections/Philanthropy';
import Awards from '../components/PageSections/Awards';
import ContactMe from '../components/PageSections/ContactMe';

// define styles here
const myStyles = {
    section: {
        height: '4500px'
    },
    contact: {
        height: '3700px'
    }
}

document.body.style.backgroundColor = 'rgb(240, 245, 285)'

function About() {
    return (
        <div id='page'>
            <Navbar />
            <br></br>
            <PageIntro />
            <br></br>
            <br></br>

            {/* All page sections start here */}

            <div className='section' id='about' style={myStyles.section}>
                <AboutMe />
            </div>

            <div className='section' id='business' style={myStyles.section}>
                <Business />
            </div>

            <div className='section' id='philanthropy' style={myStyles.section}>
                <Philanthropy />
            </div>

            <div className='section' id='awards' style={myStyles.section}>
                <Awards />
            </div>

            <div className='section' id='contact' style={myStyles.contact}>
                <ContactMe />
            </div>
            <div id='bottom'>
                <Footer />
            </div>
        </div>
    )
}

export default About;