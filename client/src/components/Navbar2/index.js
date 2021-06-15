import React, { useState, useEffect } from 'react';
import { Button } from 'reactstrap';

const myStyles = {
    card: {
        zIndex: '1',
        position: 'fixed',
        marginTop: '7px',
        animation: 'fadeIn 5s'
    },

    listGroupItem: {
        backgroundColor: 'rgb(240, 245, 285)'
    }
}

function NavLinks() {
    // declaring state variables
    const [open, setOpen] = useState('false');

    const handleToggle = () => {
        setOpen(!open);
    }

    return (
        <div>
            <div className='card' style={myStyles.card}>
                <Button
                    onClick={handleToggle}
                    color='success'
                    >
                        show/hide nav
                </Button>
                {open ?
                <div className='list-group'>
                    <a href="#about" className="list-group-item list-group-item-action" style={myStyles.listGroupItem}>About Me</a>
                    <a href="#business" className="list-group-item list-group-item-action" style={myStyles.listGroupItem}>Business</a>
                    <a href="#philanthropy" className="list-group-item list-group-item-action" style={myStyles.listGroupItem}>Philanthropy</a>
                    <a href="#awards" className="list-group-item list-group-item-action" style={myStyles.listGroupItem}>Awards</a>
                    <a href="#contact" className="list-group-item list-group-item-action" style={myStyles.listGroupItem}>Contact Me</a>
                    <a href='#page' className="list-group-item list-group-item-action" style={myStyles.listGroupItem}>Back To Top</a>
                </div>
                : null}
            </div>
        </div>
    );
}

export default NavLinks;