import React from 'react';

const myStyles = {
    card: {
        zIndex: '1',
        position: 'fixed',
        animation: 'fadeIn 5s'
    },

    listGroupItem: {
        backgroundColor: 'rgb(241, 237, 201)'
    }
}

function NavLinks() {

    return (
        <div className='card' style={myStyles.card}>
            <div className='list-group'>
                <a href="#about" className="list-group-item list-group-item-action" style={myStyles.listGroupItem}>About Me</a>
                <a href="#business" className="list-group-item list-group-item-action" style={myStyles.listGroupItem}>Business</a>
                <a href="#philanthropy" className="list-group-item list-group-item-action" style={myStyles.listGroupItem}>Philanthropy</a>
                <a href="#awards" className="list-group-item list-group-item-action" style={myStyles.listGroupItem}>Awards</a>
                <a href="#contact" className="list-group-item list-group-item-action" style={myStyles.listGroupItem}>Contact Me</a>
                <a href='#page' className="list-group-item list-group-item-action" style={myStyles.listGroupItem}>Back To Top</a>
            </div>
        </div>
    );
}

export default NavLinks;