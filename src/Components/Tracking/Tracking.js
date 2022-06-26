// Libraries
import React from 'react';
import { useState, useEffect, useRef } from 'react';

// Components
import './Tracking.css';
import TrackTarget from './TrackTarget/TrackTarget.js';
import Timer from '../Timer/Timer';

function Clicking() {
    // State
    const [score, setScore] = useState(0)
    const [playing, setPlaying] = useState(false)
    const defaultTime = 30;
    const [time, setTime] = useState(defaultTime);

    const [startTimer, setStartTimer] = useState(false);

    // STRETCH GOAL: Dynamic playboard sizes
    // const [playHeight, setPlayHeight] = useState(15)
    // const [playWidth, setPlayWidth] = useState(12)

    const startGame = () => {
        setScore(0);
        setTime(defaultTime);
        setPlaying(true);
        setStartTimer(true);
    }

    return (
        <div>
            <h1 className="subtitle">Clicking</h1>
            <div className="container">
                <div className='challenge'>
                    <h4>CHALLENGE</h4>
                    <h4>Beat the developer's highscore of 87</h4>
                </div>
                <p className="score">Score: {score}</p>
                <Timer setPlaying={setPlaying} startTimer={startTimer} setStartTimer={setStartTimer} time={time} setTime={setTime} />
                <button onClick={() => startGame()} className="startBtn">Start</button>
                <div className="playBoard">
                    {playing === true ? <TrackTarget score={score} setScore={setScore} /> : null}
                </div>
            </div>
        </div>
    );
};

export default Clicking;