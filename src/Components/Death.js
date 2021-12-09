import React from 'react'
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

    let style = {
        color: "#4AF626",
        marginTop: "1%",
        marginBottom: "1%",
        fontFamily: 'TerminalFont',
        overflow: "auto",
        height: "90%",
    }

    let usersDead = {
        fontFamily: 'TerminalFont',
        color: "#4AF626",
        whiteSpace: "pre-line"
    }

    
    return (
        <div>
            <p style={style}>{displayText}</p>
            <br />
            <h3 style={style} >Leaderboard:</h3>
            <p style={usersDead} >{[...userStats].sort((a, b) => a[1] - b[1]).reverse().map((u) => `${u[0]} --- ${u[1]}\n`)}</p>
        </div>
    )
}

export default Death
