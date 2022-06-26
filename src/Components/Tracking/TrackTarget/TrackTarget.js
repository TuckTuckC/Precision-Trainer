// Libraries
import React, { useState, useEffect } from 'react'

// Styles
import './TrackTarget.css';

// Components
import {score, setScore} from '../Tracking';

function TrackTarget(score) {

    // State
    const [speed, setSpeed] = useState(250);

    const container = document.getElementsByClassName('playBoard');

    const pos = {
        bottom: container.getBoundingClientRect().y + container.getBoundingClientRect().height,
        top: container.getBoundingClientRect().y,
        left: container.getBoundingClientRect().x,
        right: container.getBoundingClientRect().x + container.getBoundingClientRect().width,
    }

    // Functions


    const generateNewPos = () => {
        let containerSize = {
            height: container.getBoundingClientRect().height,
            width: container.getBoundingClientRect().width,
        };

        let x = Math.floor(Math.random() * containerSize.width + pos.left)
        let y = Math.floor(Math.random() * containerSize.height + pos.top)

        return { x : x, y : y }
    };

    const calcDist = (a, b) => {
        let dx = a.x - b.x;
        let dy = a.y - b.y;
        let dist = Math.sqrt( dx * dx + dy * dy );
        return dist;
    }

    const moveOnce = () => {

    }

  return (
    <div onClick={() => null} className='target'></div>
  );
};

export default TrackTarget;