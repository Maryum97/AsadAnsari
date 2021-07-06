import React from 'react';
import { Container, Row, Col } from 'reactstrap';

// import components here
import Header from '../Header';
import Description from '../Description';
import Quotation from '../Quotation';
import PhilCard from '../PhilanthropyItems';

// import images here
import Item1 from '../../Assets/Phil-Logos/Logo1.png';
import Item2 from '../../Assets/Phil-Logos/Logo2.png';
import Item3 from '../../Assets/Phil-Logos/Logo3.png';
import Item4 from '../../Assets/Phil-Logos/Logo4.png';
import Item5 from '../../Assets/Phil-Logos/Logo5.png';
import Item6 from '../../Assets/Phil-Logos/Logo6.png';

function Philanthropy() {
    return (
        <div>
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
    )
}

export default Philanthropy;