// Libraries
import React from 'react';
import { useState } from 'react';

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

        info === cInfo ? setCShowing(true): setCShowing(false);
        info === tInfo ? setTShowing(true): setTShowing(false);
        info === sInfo ? setSShowing(true): setSShowing(false);
    };

    return (
        <div>
            <h1>Choose A Mode</h1>
            <div className='scenario' onClick={ => moreInfo(cInfo)}>
                <h2>Clicking</h2>
                <button className="cInfoBtn">More Info</button>
                <p className='cInfo' style={{ visibility: 'hidden' }}>Hone your aim on multiple static targets</p>
            </div>
            <div className='scenario' onClick={() => moreInfo(tInfo)}>
                <h2>Tacking</h2>
                <button className="tInfoBtn">More Info</button>
                <p className='tInfo' style={{ visibility: 'hidden' }}>Hone your aim on moving targets that are invincible</p>
            </div>
            <div className='scenario' onClick={() => moreInfo(sInfo)}>
                <h2>Switching</h2>
                <button className="sInfoBtn" onClick>More Info</button>
                <p className='sInfo' style={{ visibility: 'hidden' }}>Hone your aim on multiple moving tergets</p>
            </div>
        </div>
    );
};

export default Play;