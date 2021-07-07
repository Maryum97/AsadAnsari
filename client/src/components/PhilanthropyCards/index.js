import React from 'react';
import { Container } from 'reactstrap';
import './style.css';

// import components here
import PhilCard from '../PhilanthropyItems';

// import images here
import Item1 from '../../Assets/Phil-Logos/Logo1.png';
import Item2 from '../../Assets/Phil-Logos/Logo2.png';
import Item3 from '../../Assets/Phil-Logos/Logo3.png';
import Item4 from '../../Assets/Phil-Logos/Logo4.png';
import Item5 from '../../Assets/Phil-Logos/Logo5.png';
import Item6 from '../../Assets/Phil-Logos/Logo6.png';

function PhilCards() {
    return (
        <Container>
            <div className='phil-card-grid'>
                <div className='phil-card'>
                    <PhilCard
                        item={Item1}
                        title='British Asian Trust Mental Health Association'
                        text='From 2018, Asad has supported the British Asian Trust on their mental health projects throughout Pakistan (Asad’s main focus), India and Bangladesh.'
                    />
                </div>
                <div className='phil-card'>
                    <PhilCard
                        item={Item2}
                        title='Armed Forces Muslim Forum'
                        text='Asad has provided advice on diversity-related issues to the Ministry of Defense, working to raise awareness for the Army within the Professional Services sector and The City.'
                    />
                </div>
                <div className='phil-card'>
                    <PhilCard
                        item={Item3}
                        title='Graham Layton Trust (LRBT)'
                        text='From 2017, Asad has volunteered to raise funding for the Graham Layton Trust in partnership with LRBT, providing hospitals and clinics in Pakistan free eye care for all citizens.'
                    />
                </div>
                <div className='phil-card'>
                    <PhilCard
                        item={Item4}
                        title='Council of British Hajjis UK'
                        text='A former member and current brand ambassador, Asad has been helping to end white collar crime within the Hajj and Umrah travel sector.'
                    />
                </div>
                <div className='phil-card'>
                    <PhilCard
                        item={Item5}
                        title='Living the Life TV Appearance'
                        text='In 2019, Asad had a TV appearance on the talk show Living the Life on Islamn Channel, talking about spirituality and faith.'
                    />
                </div>
                <div className='phil-card'>
                    <PhilCard
                        item={Item6}
                        title='Deloits Muslim Network'
                        text='Asad has provided educational initiatives such as diversity and inclusion networks, delivering profile building and connecting corporate companies in the UK.'
                    />
                </div>
            </div>
        </Container>
    )
}

export default PhilCards;