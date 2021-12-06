import React, {useEffect, useState} from 'react'

const TimeInGame = () => {
  
    const [count, setCount] = useState(0)

    useEffect(() => {
        // let timer = setInterval(() => setCount(count + 1), 1000)

        setInterval(() => setCount((count) => count += 1), 1000)


    }, [])
    
    
    return (
        <div>
            <p>Time Playing: {count}</p>
        </div>
    )
}

export default TimeInGame
