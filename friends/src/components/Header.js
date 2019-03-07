import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header style={{ width: '100%', height: 80 }}>
            <Link to="/">Home</Link>
            <Link to="/add">Add friend</Link>
        </header>
    )
}

export default Header;