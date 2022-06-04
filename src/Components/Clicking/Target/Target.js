// Libraries
import React, { useState, useEffect } from 'react'

// Styles
import './Target.css';

function Target({ spawn1, setSpawnList, newSpawnID, score, setScore, index, spawnList }) {

    // State
    const [active, setActive] = useState(false)
    const [className, setClassName] = useState(`target target${index}`)

    // Turns all of the selected first targets red for start of the scenario
    const firstSpawn = () => {
        if (spawnList.includes(index)) {
            setActive(true);
            setClassName(`active target target${index}`)
        }
    }

    // Respawn function for when the game starts, and every time spawnList changes after that
    useEffect(() => {
        firstSpawn()
    }, [spawnList])

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
            // Add score and deactivate target
            setScore(score + 1)
            setActive(false)
            setClassName(`target target${index}`)

            // Remove this index from spawnList so that it is no longer on the spawnList
            let i = spawnList.indexOf(index)
            setSpawnList(spawnList.splice(i, 1))

            // Add new spawnList number to spawnList
            spawn1();
            console.log('active: ', active)
            console.log('className: ', className)
            console.log('spawnList: ', spawnList)
            console.log('newSpawnID: ', newSpawnID)
        }
    }

  return (
    <div onClick={() => handleClick()} className={className}></div>
  )
}

export default Target