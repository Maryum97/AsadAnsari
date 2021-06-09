import React from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Description from '../components/Description';
import Footer from '../components/Footer';
import PageIntro from '../components/PageIntro';

function About() {
    return (
        <div>
            <Navbar />
            <PageIntro />
            <br></br>
            <br></br>
            <Header header='About Me'/>
            <br></br>
            <Description paragraph='Hello, everyone, welcome to my page! Here is something about me...'/>
            <br></br>
            <br></br>
            <Header header='Business'/>
            <br></br>
            <Description paragraph='Here is an insider to my business background...'/>
            <br></br>
            <br></br>
            <Header header='Philanthropy'/>
            <br></br>
            <Description paragraph='Here is a list of some of my donations...'/>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Footer />
        </div>
    )
}

export default About;