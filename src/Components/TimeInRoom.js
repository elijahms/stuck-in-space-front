import {useState, useEffect} from 'react'

const TimeInRoom = ({currRoom}) => {

    const [count, setCount] = useState(0)

    useEffect(() => {
        // let timer = setInterval(() => setCount(count + 1), 1000)
        setInterval(() => setCount((count) => count += 1), 1000)
            if (currRoom != 0){
                setCount(0)
            }

    }, [])


    return (
        <div>
            <p>Time in Room {count}</p>
        </div>
    )
}

export default TimeInRoom
