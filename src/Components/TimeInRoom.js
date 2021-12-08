import {useState, useEffect} from 'react'

const TimeInRoom = ({currRoom}) => {

    const [count, setCount] = useState(0)

    return (
        <div>
            <p>Moves Taken: {count}</p>
        </div>
    )
}

export default TimeInRoom
