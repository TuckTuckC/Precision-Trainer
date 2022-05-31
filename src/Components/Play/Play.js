import React from 'react'

const moreInfo = () => {
  
};

function Play() {
  return (
    <div>
      <h1>Choose A Mode</h1>
      <div className='scenario'>
        <h2>Clicking</h2>
        <button className="cInfoBtn">More Info</button>
        <p className='cInfo' style={{visibility: 'hidden'}}>Hone your aim on multiple static targets</p>
      </div>
      <div className='scenario'>
        <h2>Tacking</h2>
        <button className="tInfoBtn">More Info</button>
        <p className='tInfo' style={{visibility: 'hidden'}}>Hone your aim on moving targets that are invincible</p>
      </div>
      <div className='scenario'>
        <h2>Switching</h2>
        <button className="sInfoBtn" onClick>More Info</button>
        <p className='sInfo' style={{visibility: 'hidden'}}>Hone your aim on multiple moving tergets</p>
      </div>
    </div>
  );
};

export default Play;