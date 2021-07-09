import React, { useState, useEffect } from 'react';
import { Button } from 'reactstrap';

const myStyles = {
    card: {
        zIndex: '1',
        position: 'fixed',
        marginTop: '900px',
        animation: 'fadeIn 5s',
    },

    listGroupItem: {
        backgroundColor: 'rgb(221, 185, 94)'
    },
    button: {
        backgroundColor: 'rgb(133, 39, 39)',
        color: 'white',
        fontSize: '16pt'
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
                <button
                    onClick={handleToggle}
                    color='success'
                    style={myStyles.button}
                    >
                        show/hide nav
                </button>
                {open ?
                <div className='list-group'>
                    <a href='#bottom' className="list-group-item list-group-item-action" style={myStyles.listGroupItem}>Bottom Of Page</a>
                    <a href='#page' className="list-group-item list-group-item-action" style={myStyles.listGroupItem}>Back To Top</a>
                </div>
                : null}
            </div>
        </div>
    );
}

export default NavLinks;