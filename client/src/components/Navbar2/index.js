import React, { useState, useEffect } from 'react';
import { Button } from 'reactstrap';

const myStyles = {
    card: {
        zIndex: '1',
        position: 'fixed',
        marginTop: '930px',
        animation: 'fadeIn 5s',
    },

    listGroupItem: {
        backgroundColor: 'rgb(221, 185, 94)'
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
                    <a href='#bottom' className="list-group-item list-group-item-action" style={myStyles.listGroupItem}>Bottom Of Page</a>
                    <a href='#page' className="list-group-item list-group-item-action" style={myStyles.listGroupItem}>Back To Top</a>
                </div>
                : null}
            </div>
        </div>
    );
}

export default NavLinks;