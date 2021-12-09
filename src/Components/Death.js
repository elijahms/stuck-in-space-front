import {useEffect, useState} from 'react'

const Death = ({displayText}) => {
    
    const [userStats, setUserStats] = useState([])

    useEffect(() => {
        fetch(`http://localhost:9292/alluserstats`)
        .then((r) => r.json())
        .then((data) => {
            setUserStats(data.sort()); 
        })
    }, [])
    
    return (
        <div>
            <p>{displayText}</p>
            <br />
            <h3>Leaderboard:</h3>
            <p>{[...userStats].sort((a, b) => a[1] - b[1]).reverse().map((u) => `${u[0]} --- ${u[1]}\n`)}</p>
        </div>
    )
}

export default Death
