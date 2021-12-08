import React, {useEffect, useState} from 'react'

const TimeInGame = () => {
  
    const [second, setSecond] = useState(0.0)
    const [minute, setMinute] = useState(0)
    
    useEffect(() => {
        // let timer = setInterval(() => setSecond(second + 1), 1000)
        let secondInt = 0
        let seconds = setInterval(() => {
            setSecond(secondInt)
            if (secondInt <= 58) {
                return secondInt += 1
            } else {
               return secondInt = 0
            }}
        , 1000)
        let minutes = setInterval(() => setMinute((minute) => minute += 1), 60000)

        return () => {
            seconds.clearInterval()
            minutes.clearInterval()
        }


    }, [])
    
    return (
        <div>
            <p>Time Playing: {minute}:{second}</p>
        </div>
    )
}

export default TimeInGame
