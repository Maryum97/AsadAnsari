import React from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Description from '../components/Description';
import Footer from '../components/Footer';

function About() {
    return (
        <div>
            <Navbar />
            <br></br>
            <Header header='About Myself'/>
            <Description paragraph='Hello, everyone, welcome to my page! Here is something about me...'/>
            <br></br>
            <Header header='My Accomplishments'/>
            <Description paragraph='Here is a list of some of the stuff I have accomplished:'/>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Footer />
        </div>
    )
}

export default About;