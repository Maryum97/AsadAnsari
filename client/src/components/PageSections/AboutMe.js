import React from 'react';

// import components here
import Header from '../Header';
import Description from '../Description';

// import images here

function AboutMe() {
    return (
        <div>
            <Header header='About Me' />
            <br></br>
            {/* <img src={Image1} style={myStyle.style1} className="img-fluid"></img><br></br> */}
            <Description paragraph='With vast knowledge of the rapidly changing business world, Asad Ansari is the founder and managing director of multiple risk advisory consultancies, with a wide-ranging experience of a number of sectors including Financial, Legal and Technology.' />
            <Description paragraph='Being well versed in public relations, Asad has been involved in charity organisations within UK and Asia including the British Asian Trust Mental Health Association in Pakistan to raise awareness of mental health. He has also volunteered for Graham Layton Trust, providing free eye care for people of all backgrounds throughout Pakistan.' />
            <Description paragraph='Among other volunteering roles, Asad is on the Armed Forces Muslim Forum communication group committee dealing with interfaith and diversity related issues. Asad is currently involved in the City of London Campaign to become the Commons Councillor.' />
            <br></br>
            <br></br>
        </div>
    )
}

export default AboutMe;