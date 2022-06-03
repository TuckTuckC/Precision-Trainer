import React, { useState, useEffect } from 'react'

import './Target.css';

function Target({ index, random }) {

    const [active, setActive] = useState(false)

    const bot = document.getElementsByClassName(`target${index}`);

    console.log(random, index);

    const firstSpawn = () => {
        if (random.includes(index)) {
            setActive(true);
        }
    }

    useEffect(() => {
        firstSpawn()
    })


  return (
    <div className={active ? `active target target${index}` : `target target${index}`}>{index}</div>
  )
}

export default Target