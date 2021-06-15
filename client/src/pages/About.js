import React from 'react';
import { Container, Row, Col } from 'reactstrap';

// import components here
import Navbar from '../components/Navbar';
import Navbar2 from '../components/Navbar2';
import Header from '../components/Header';
import Description from '../components/Description';
import Footer from '../components/Footer';
import PageIntro from '../components/PageIntro';
import Quotation from '../components/Quotation';
import PhilCard from '../components/PhilanthropyItems';

// import images here
import Image1 from '../Assets/Asad-Ansari-1280x640.jpg';
import Logo1 from '../Assets/RiskIntelLogo.png';
import Logo2 from '../Assets/MayfairITConsultancyLogo.png';
import Logo3 from '../Assets/AccrediNationLogo.png';
import Item1 from '../Assets/BritishAsianTrust.png';
import Item2 from '../Assets/ArmedForcesMuslimAssociation.png';
import Item3 from '../Assets/GrahamLaytonTrust.png';
import Item4 from '../Assets/CBH.png';
import Item5 from '../Assets/IslamChannel.png';
import Item6 from '../Assets/Deloitte.png';
import Image2 from '../Assets/Top100AsianStarsInUKTech.png';

document.body.style.backgroundColor = 'rgb(250, 245, 235)'

const myStyle = {
    style1: {
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '450px',
        height: '200px'
    },

    style2: {
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '300px',
        height: '90px'
    },

    style3: {
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '200px',
        height: '50px'
    }
}

function About() {
    return (
        <div id='page'>
            <Navbar />
            <Navbar2 />
            <br></br>
            <PageIntro />
            <br></br>
            <br></br>
            <div id='about'>
                <Header header='About Me' />
                <br></br>
                <img src={Image1} style={myStyle.style1} className="img-fluid"></img><br></br>
                <Description paragraph='With vast knowledge of the rapidly changing business world, Asad Ansari is the founder and managing director of multiple risk advisory consultancies, with a wide-ranging experience of a number of sectors including Financial, Legal and Technology.' />
                <Description paragraph='Being well versed in public relations, Asad has been involved in charity organisations within UK and Asia including the British Asian Trust Mental Health Association in Pakistan to raise awareness of mental health. He has also volunteered for Graham Layton Trust, providing free eye care for people of all backgrounds throughout Pakistan.' />
                <Description paragraph='Among other volunteering roles, Asad is on the Armed Forces Muslim Forum communication group committee dealing with interfaith and diversity related issues. Asad is currently involved in the City of London Campaign to become the Commons Councillor.' />
                <br></br>
                <br></br>
            </div>

            <div id='business'>
                <Header header='Business' />
                <br></br>
                <Description paragraph='Asad is the Founder and Managing Director of:' />
                <Container>
                    <Row>
                        <img src={Logo1} style={myStyle.style3} className="img-fluid"></img>
                        <img src={Logo2} style={myStyle.style2} className="img-fluid"></img>
                        <img src={Logo3} style={myStyle.style3} className="img-fluid"></img>
                    </Row>
                </Container>
                <br></br>
                <Description paragraph='By taking proactive methods to enhance business performance, improving customer service and strengthening credibility, he has specialised in large risk and regulatory projects for clients and companies.' />
                <Description paragraph='Aside from his Consultancy, Asad manages Transform Learning Academy, a Training company offering courses and consultancy in Business Analysis, Financial Crime and GDPR. Asad believes in the vast importance of diversity and the learning agenda for young professionals. He and his partners are passionate about helping individuals to upskill and build their confidence to progress their careers successfully.' />
                <br></br>
                <br></br>
            </div>

            <div id='philanthropy'>
                <Header header='Philanthropy' />
                <br></br>
                <Quotation />
                <br></br>
                <Description
                    heading='Freeman for the City of London'
                    paragraph='For his work in the risk intelligence services to mitigate third party and reputational risk and 
                goals to improve education standards and bring integrity and quality to Human Resources.
                '
                />
                <Description paragraph='Asad was joined by Michael Mainelli (Sheriff, and Alderman), Mark Wheatley (Common Councillor), and Moawia Bin-Sufyan as he was recognised being a Freeman for the City of London on 23/02/2021 by Laura Miller (Deputy Clerk to the Chamberlain’s Court).' />
                <Description paragraph='Others who have received the Freeman or Free Sister recognition are amongst Royal Family members; HRH Princess Elizabeth, HM Queen Elizabeth The Queen Mother, Diana, Princess of Wales, Prime ministers of the United Kingdom, Presidents of the United States of America, Entrepreneurs and other Senior officials within Royal Family, Politics, Business, and celebrity in their chosen field.' />
                <Description heading="Asad's other philanthropic works include the following:" />
                <Container>
                    <Row>
                        <Col xs='4'>
                            <PhilCard
                                item={Item1}
                                title='British Asian Trust Mental Health Association'
                                text='From 2018, Asad has supported the British Asian Trust on their mental health projects throughout Pakistan (Asad’s main focus), India and Bangladesh.'
                            />
                        </Col>
                        <Col xs='4'>
                            <PhilCard
                                item={Item2}
                                title='Armed Forces Muslim Forum'
                                text='Asad has provided advice on diversity-related issues to the Ministry of Defense, working to raise awareness for the Army within the Professional Services sector and The City.'
                            />
                        </Col>
                        <Col xs='4'>
                            <PhilCard
                                item={Item3}
                                title='Graham Layton Trust (LRBT)'
                                text='From 2017, Asad has volunteered to raise funding for the Graham Layton Trust in partnership with LRBT, providing hospitals and clinics in Pakistan free eye care for all citizens.'
                            />
                        </Col>
                    </Row>

                    <Row>
                        <Col xs='4'>
                            <PhilCard
                                item={Item4}
                                title='Council of British Hajjis UK'
                                text='A former member and current brand ambassador, Asad has been helping to end white collar crime within the Hajj and Umrah travel sector.'
                            />
                        </Col>
                        <Col xs='4'>
                            <PhilCard
                                item={Item5}
                                title='Living the Life TV Appearance'
                                text='In 2019, Asad had a TV appearance on the talk show Living the Life on Islamn Channel, talking about spirituality and faith.'
                            />
                        </Col>
                        <Col xs='4'>
                            <PhilCard
                                item={Item6}
                                title='Deloits Muslim Network'
                                text='Asad has provided educational initiatives such as diversity and inclusion networks, delivering profile building and connecting corporate companies in the UK.'
                            />
                        </Col>
                    </Row>
                </Container>
                <br></br>
                <br></br>
            </div>

            <div id='awards'>
                <Header header='Awards' />
                <br></br>
                <img src={Image2} style={myStyle.style1} className="img-fluid"></img><br></br>
                <br></br>
                <Description
                    heading='Asians In Tech Award 2020'
                    paragraph='Asad has received the Top 100 Asians Stars In UK Tech Award 2020 for his work in the risk and regulatory sector, which delivers a suite of flexible services that assist clients with assessments, reviews, deep dives, and forecasts. Most notably having delivered projects and developed business across digital technology, change, regulatory, risk, governance and IT projects across a range of FTSE 100 clients within Enterprise Software, AIM stock market, Insurance, Banking, Technology, Pharmaceutical, and Public Sector.'
                />
                <br></br>
                <br></br>
            </div>

            <div id='contact'>
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
            <br></br>
            <br></br>
            <br></br>
            <Footer />
        </div>
    )
}

export default About;