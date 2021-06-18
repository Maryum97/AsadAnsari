import React from 'react';

// import components here
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageIntro from '../components/PageIntro';

// import page sections here
import AboutMe from '../components/PageSections/AboutMe';
import Business from '../components/PageSections/Business';
import Philanthropy from '../components/PageSections/Philanthropy';
import Awards from '../components/PageSections/Awards';
import ContactMe from '../components/PageSections/ContactMe';

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

            <div id='about'>
                <AboutMe />
            </div>

            <div id='business'>
                <Business />
            </div>

            <div id='philanthropy'>
                <Philanthropy />
            </div>

            <div id='awards'>
                <Awards />
            </div>

            <div id='contact'>
                <ContactMe />
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Footer />
        </div>
    )
}

export default About;