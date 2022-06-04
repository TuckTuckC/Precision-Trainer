import React, { useState, useEffect } from 'react'

import './Target.css';

function Target({ spawn1, setRandom, newSpawnID, score, setScore, index, random }) {

    const [active, setActive] = useState(false)

    const [className, setClassName] = useState(`target target${index}`)

    // Turns all of the selected first targets red for start of the scenario
    const firstSpawn = () => {
        if (random.includes(index)) {
            setActive(true);
            setClassName(`active target target${index}`)
        }
    }

    // Triggers the above function on page load
    useEffect(() => {
        firstSpawn()
    }, [random])

    // Every time score changes, spawn a new target
    useEffect(() => {
        if (newSpawnID === index) {
            setActive(true);
            setClassName(`active target target${index}`)
        }
    }, score)

    // Handle Click
    const handleClick = () => {


        // Check if clicked target is active or not
        if (active) {
            setScore(score + 1)
            setActive(false)
            setClassName(`target target${index}`)
            let i = random.indexOf(index)
            setRandom(random.splice(i, 1))
            spawn1();
            console.log('active: ', active)
            console.log('className: ', className)
            console.log('random: ', random)
            console.log('newSpawnID: ', newSpawnID)
        }
    }

  return (
    <div onClick={() => handleClick()} className={className}>{index}</div>
  )
}

export default Target