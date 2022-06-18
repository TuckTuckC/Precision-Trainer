// Libraries
import React from 'react';

// Styles
import './Navbar.css';

//Components
import Play from '../Play/Play';

function NavBar() {
    return (
        <div className='navbar'>
            <a className={`link ${window.location.pathname === '/' ? 'activeLink' : ''}`} href="/" onClick={<Play />}>Home</a>
            <a className={`link ${window.location.pathname === '/play' ? 'activeLink' : ''}`}  href="/play" onClick={<Play />}>Play</a>
        </div>
    )
}

export default NavBar
