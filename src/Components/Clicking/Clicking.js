// Libraries
import React from 'react';
import { useState, useEffect } from 'react';

// Components
import './Clicking.css';
import Target from './Target/Target.js'

function Clicking() {

    // State
    const [score, setScore] = useState(0)
    const [targetArray, setTargetArray] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69])
    const [random, setRandom] = useState(
        Array.from(
            {length: 5}, () => Math.floor(Math.random() * 69)
        )
    );
    const [newSpawnID, setNewSpawnID] = useState(null);

    // STRETCH GOAL: Dynamic playboard sizes
    // const [playHeight, setPlayHeight] = useState(15)
    // const [playWidth, setPlayWidth] = useState(12)

    const spawn1 = () => {
        setNewSpawnID(Math.floor(Math.random() * 69))
        setRandom([...random, newSpawnID])
    }

  return (
    <div>
        <h1 className="subtitle">Clicking</h1>
        <div className="container">
            <p className="score">Score: {score}</p>
            <div className="playBoard">
                {targetArray.map((key, index) => (
                    <Target 
                    spawn1={spawn1} 
                    newSpawnID={newSpawnID} 
                    score={score} 
                    setScore={setScore} 
                    setRandom={setRandom}
                    random={random} 
                    key={key} 
                    index={index}
                    />
                ))}
            </div>
        </div>
    </div>
  );
};

export default Clicking;