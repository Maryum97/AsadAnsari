import React from 'react';
import { Container, Row } from 'reactstrap';

// import components here
import Header from '../Header';
import Description from '../Description';

// import images here
import Logo1 from '../../Assets/RiskIntelLogo.png';
import Logo2 from '../../Assets/MayfairITConsultancyLogo.png';
import Logo3 from '../../Assets/AccrediNationLogo.png';

// define css here
const myStyle = {
    style1: {
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '300px',
        height: '90px'
    },

    style2: {
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '200px',
        height: '50px'
    }
}

function Business() {
    return (
        <div>
            <Header header='Business' />
            <br></br>
            <Description paragraph='Asad is the Founder and Managing Director of:' />
            <Container>
                <Row>
                    <img src={Logo1} style={myStyle.style2} className="img-fluid"></img>
                    <img src={Logo2} style={myStyle.style1} className="img-fluid"></img>
                    <img src={Logo3} style={myStyle.style2} className="img-fluid"></img>
                </Row>
            </Container>
            <br></br>
            <Description paragraph='By taking proactive methods to enhance business performance, improving customer service and strengthening credibility, he has specialised in large risk and regulatory projects for clients and companies.' />
            <Description paragraph='Aside from his Consultancy, Asad manages Transform Learning Academy, a Training company offering courses and consultancy in Business Analysis, Financial Crime and GDPR. Asad believes in the vast importance of diversity and the learning agenda for young professionals. He and his partners are passionate about helping individuals to upskill and build their confidence to progress their careers successfully.' />
            <br></br>
            <br></br>
        </div>
    )
}

export default Business;