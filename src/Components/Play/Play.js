// Libraries
import React from 'react';
import { useState } from 'react';

// Style
import './Play.css'

// Components
import Clicking from '../Clicking/Clicking';

function Play() {

    // Variables
    const cInfo = document.getElementsByClassName('cInfo');
    const tInfo = document.getElementsByClassName('tInfo');
    const sInfo = document.getElementsByClassName('sInfo');

    //State
    const [cShowing, setCShowing] = useState(false);
    const [tShowing, setTShowing] = useState(false);
    const [sShowing, setSShowing] = useState(false);

    // Toggle visibility of scenario descriptions
    const moreInfo = (info) => {
        if (info === cInfo) {
            cShowing === false ? setCShowing(true) : setCShowing(false);
        }
        if (info === tInfo) {
            tShowing === false ? setTShowing(true) : setTShowing(false);
        }
        if (info === sInfo) {
            sShowing === false ? setSShowing(true) : setSShowing(false);
        }
    };

    return (
        <div className='playContainer'>
            <h1 className='subtitle'>Choose A Mode</h1>
            <div className="modeContainer">
                <div className='scenario'>
                    <h2>Clicking</h2>
                    <button className="cInfoBtn infoBtn" onClick={() => moreInfo(cInfo)}>More Info</button>
                    <p className='cInfo' style={cShowing ? { visibility: 'visible' } : { visibility: 'hidden' }}>Hone your aim on multiple static targets</p>
                    <a className='startBtn' href="/clicking"> Start Challenge</a>
                </div>
                <div className='scenario'>
                    <h2>Tacking</h2>
                    <button className="tInfoBtn infoBtn" onClick={() => moreInfo(tInfo)}>More Info</button>
                    <p className='tInfo' style={tShowing ? { visibility: 'visible' } : { visibility: 'hidden' }}>Hone your aim on moving targets that are invincible</p>
                    <a className='startBtn' href="/tracking">Start Challenge</a>
                </div>
                <div className='scenario'>
                    <h2>Switching</h2>
                    <button className="sInfoBtn infoBtn"  onClick={() => moreInfo(sInfo)}>More Info</button>
                    <p className='sInfo' style={sShowing ? { visibility: 'visible' } : { visibility: 'hidden' }}>Hone your aim on multiple moving tergets</p>
                    <a className='startBtn' href="/switching">Start Challenge</a>
                </div>
            </div>

        </div>
    );
};

export default Play;