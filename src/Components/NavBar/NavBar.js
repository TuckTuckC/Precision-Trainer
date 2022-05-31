// Libraries
import React from 'react';

//Components
import Play from '../Play/Play';

function NavBar() {
    return (
        <div>
            <a href="/play" onClick={<Play />}>Play</a>
        </div>
    )
}

export default NavBar
