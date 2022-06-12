// Libraries
import React, { useState, useEffect } from 'react'

// Components

function Timer({startTimer, setStartTimer, setPlaying, time, setTime}) {
    
    const [timerId, setTimerId] = useState(0);

    useEffect(() => {
        if (time < 1) {
            setStartTimer(false);
            setPlaying(false);
        };
    }, [time]);

    useEffect(() => {
        let intervalId = null;
        if (startTimer) {
            intervalId = setInterval(() => {
                setTime(prev => prev -=1)
                console.log(time);
            }, 1000)

            setTimerId(intervalId)
        } else {
            clearInterval(timerId);
        };
    }, [startTimer])

    return (
        <div className="timer">
            <span className='time'>{time < 10 ? '0' + time : time }</span>
        </div>
    )
}

export default Timer;