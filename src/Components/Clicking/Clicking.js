// Libraries
import React from 'react';
import { useState, useEffect } from 'react';

// Components
import './Clicking.css';
import Target from './Target/Target.js'

function Clicking() {

    // State
    const [score, setScore] = useState(0)

    // STRETCH GOAL: Dynamic playboard sizes
    // const [playHeight, setPlayHeight] = useState(15)
    // const [playWidth, setPlayWidth] = useState(12)

  return (
    <div>
        <h1 className="subtitle">Clicking</h1>
        <div className="container">
            <p className="score">Score: {score}</p>
            <div className="playBoard">
                <Target />
                <Target />
                <Target />
                <Target />
                <Target />
                <Target />
                <Target />
                <Target />
                <Target />
                <Target />
                <Target />
                <Target />
                <Target />
                <Target />
                <Target />
                <Target />
                <Target />
                <Target />
                <Target />
                <Target />
                <Target />
                <Target />
                <Target />
                <Target />
                <Target />
                <Target />
                <Target />
                <Target />
                <Target />
                <Target />
                <Target />
                <Target />
                <Target />
                <Target />
                <Target />
                <Target />
                <Target />
                <Target />
                <Target />
                <Target />
                <Target />
                <Target />
                <Target />
                <Target />
                <Target />
                <Target />
                <Target />
                <Target />
                <Target />
                <Target />
                <Target />
                <Target />
                <Target />
                <Target />
                <Target />
                <Target />
                <Target />
                <Target />
                <Target />
                <Target />
                <Target />
                <Target />
                <Target />
                <Target />
                <Target />
                <Target />
                <Target />
                <Target />
                <Target />
                <Target />
            </div>
        </div>
    </div>
  );
};

export default Clicking;