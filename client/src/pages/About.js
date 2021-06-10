import React from 'react';
import { Row, Col } from 'reactstrap';

// import components here
import Navbar from '../components/Navbar';
import Navbar2 from '../components/Navbar2';
import Header from '../components/Header';
import Description from '../components/Description';
import Footer from '../components/Footer';
import PageIntro from '../components/PageIntro';

// import images here
import Image1 from '../Assets/Asad-Ansari-1280x640.jpg';

const myStyle1 = {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '600px',
    height: '330px'
}

function About() {
    return (
        <div>
            <Navbar />
            <Navbar2 />
            <br></br>
            <PageIntro />
            <br></br>
            <br></br>
            <Header header='About Me' />
            <br></br>
            <img src={Image1} style={myStyle1}></img>
            <Description paragraph='With vast knowledge of the rapidly changing business world, Asad Ansari is the founder and managing director of multiple risk advisory consultancies, with a wide-ranging experience of a number of sectors including Financial, Legal and Technology.' />
            <Description paragraph='Being well versed in public relations, Asad has been involved in charity organisations within UK and Asia including the British Asian Trust Mental Health Association in Pakistan to raise awareness of mental health. He has also volunteered for Graham Layton Trust, providing free eye care for people of all backgrounds throughout Pakistan.' />
            <Description paragraph='Among other volunteering roles, Asad is on the Armed Forces Muslim Forum communication group committee dealing with interfaith and diversity related issues. Asad is currently involved in the City of London Campaign to become the Commons Councillor.' />
            <br></br>
            <br></br>
            <Header header='Business' />
            <br></br>
            <Description paragraph='Asad is the Founder and Managing Director of
            By taking proactive methods to enhance business performance, improving customer service and strengthening credibility, he has specialised in large risk and regulatory projects for clients and companies.
            Aside from his Consultancy, Asad manages Transform Learning Academy, a Training company offering courses and consultancy in Business Analysis, Financial Crime and GDPR. Asad believes in the vast importance of diversity and the learning agenda for young professionals. He and his partners are passionate about helping individuals to upskill and build their confidence to progress their careers successfully.
            ' />
            <br></br>
            <br></br>
            <Header header='Philanthropy' />
            <br></br>
            <Description paragraph='“Philanthropy is a huge part of my life. It fills a gap for me. The more I help others, the more it pays off personally. In a small way, I’m trying to help make a lasting impact in others’ lives. All the initiatives I’m working on with trustable charities in different sectors, help me do that.”' />
            <br></br>
            <br></br>
            <Header header='Awards' />
            <br></br>
            <br></br>
            <Header header='Contact Me' />
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