import React, {useState} from 'react'

const Score = () => {
    const [score, setScore] = useState(10000)
    return (
        <div>
            <p>Moves Left: {score}</p>
        </div>
    )
}

export default Score
