import {useState, useEffect} from 'react'

const TimeInRoom = ({currRoom}) => {

    const [count, setCount] = useState(0)

    useEffect(() => {
        // let timer = setInterval(() => setCount(count + 1), 1000)
        const fiveSeconds = setTimeout(() => setCount(0), 5000)
        const timer = setInterval(() => setCount((count) => count += 1), 1000)

        return () => timer.clearInterval()


    }, [])

    return (
        <div>
            <p>Time in Room {count}</p>
        </div>
    )
}

export default TimeInRoom
