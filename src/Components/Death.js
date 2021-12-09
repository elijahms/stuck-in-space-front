import {useEffect, useState} from 'react'

const Death = ({displayText, score, userDetails}) => {
    
    const [userStats, setUserStats] = useState([])

    useEffect(() => {
        fetch(`http://localhost:9292/alluserstats`)
        .then((r) => r.json())
        .then((data) => {
            setUserStats(data); 
        })
    }, [])

    let leaderboard = [...userStats].sort((a, b) => a[1] - b[1]).reverse().map((u) => `${u[0]} --- ${u[1]}\n`).slice(0, 10)
    
    return (
        <div>
            <p>{displayText}</p>
            <br />
            <p>Your Score: {userDetails.name}---{score}</p>
            <h3>Leaderboard:</h3>
            <p>{leaderboard}</p>
        </div>
    )
}

export default Death
