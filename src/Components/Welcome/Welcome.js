import React from 'react'

import './Welcome.css';

function Welcome() {
    return (
        <div className='welcome'>
            <div className="info section">
                <h1>Info</h1>
                {/* <p>Click "Play" to select a mode</p>
                <h2>Clicking</h2>
                <p>Clicking mode contains static targets that respawn upon being clicked. Click as many as you can in a minute!</p>
                <h2>Tracking</h2>
                <p>Tracking mode contains a single invincible moving target that you must keep your cursor over to increase your score, no need for any clicking. </p>
                <h2>Switching</h2>
                <p>Switching mode contains multiple moving targets that you must keep your cursor over to increase your score, these targets are not invincible.</p> */}
            </div>
            <div className="news section">News</div>
            <div className="guides section">Guides</div>
        </div>
    )
}

export default Welcome