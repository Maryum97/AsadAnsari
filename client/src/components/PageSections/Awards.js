import React from 'react';

// import components here
import Header from '../Header';
import Description from '../Description';

// import images here
import Image1 from '../../Assets/Top100AsianStarsInUKTech.png';

// define css here
const myStyle = {
    style1: {
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '450px',
        height: '200px'
    }
}

function Awards() {
    return (
        <div>
            <Header header='Awards' />
            <br></br>
            <img
                src={Image1}
                style={myStyle.style1}
                className="img-fluid"
                data-aos='zoom-in'
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-delay="500"
            >
            </img>

            <br></br>
            <br></br>
            <Description
                heading='Asians In Tech Award 2020'
                paragraph='Asad has received the Top 100 Asians Stars In UK Tech Award 2020 for his work in the risk and regulatory sector, which delivers a suite of flexible services that assist clients with assessments, reviews, deep dives, and forecasts. Most notably having delivered projects and developed business across digital technology, change, regulatory, risk, governance and IT projects across a range of FTSE 100 clients within Enterprise Software, AIM stock market, Insurance, Banking, Technology, Pharmaceutical, and Public Sector.'
            />
            <br></br>
            <br></br>
        </div>
    )
}

export default Awards;