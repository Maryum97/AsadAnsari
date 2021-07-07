import React from 'react';
import { Container } from 'reactstrap';

// import components here
import Header from '../Header';
import Description from '../Description';
import Quotation from '../Quotation';
import PhilCards from '../PhilanthropyCards';

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
            <br></br>
            <PhilCards />
            <br></br>
        </div>
    )
}

export default Philanthropy;