import React from 'react'
import Score from './Score'
import TimeInGame from './TimeInGame'
import TimeInRoom from './TimeInRoom'
import DisplayText from './DisplayText'
import SubmitBox from './SubmitBox'
import GameStart from './GameStart'
import {useState} from 'react'
import { Grid } from 'semantic-ui-react'

const Content = () => {
    
    let style = {
        width: "50%",
        height: "500px",
         border: "2px solid white",
        margin: "0 auto",
        padding: "1%",
        dispay: "block",
        overflow: "auto"

    }

    let gridStyle = {
        display: "inline-grid",
        justifyContent: "center",
        alignItems: "center",
        margin: "1%",
        padding: "1%",
        color: "#4AF626",
        fontFamily: 'TerminalFont',
        border: "1px solid white",
        fontSize: "1em",
        borderRight: "2px solid white"
    }
    
    const [collectedUser, setCollectedUser] = useState(false)
    const [moveCount, setMoveCount] = useState(0)
    const [currRoom, setCurrRoom] = useState(0)
    const [displayText, setDisplayText] = useState("Enter the realm of OUTER SPACE and attempt to make your way out, beware of meteors, exploding satellites, and billionaires' vanity-project-rocketships!")
    
    return (
        <div style={style}>
            <Grid container columns={3} stackable >
            <Grid.Column style={gridStyle}>
                <Score />
                </Grid.Column>
                <Grid.Column style={gridStyle}>
                <TimeInGame />
                </Grid.Column>
                <Grid.Column style={gridStyle}>
                <TimeInRoom currRoom={currRoom} moveCount={moveCount}/>
                </Grid.Column>
            </Grid>
            {!collectedUser ? <GameStart setCollectedUser={setCollectedUser} displayText={displayText} setDisplayText={setDisplayText} setCurrRoom={setCurrRoom} /> :
            <div style={{height: "70%"}}>
            <DisplayText displayText={displayText} setDisplayText={setDisplayText} />
            <SubmitBox  displayText={displayText} setDisplayText={setDisplayText} setCurrRoom={setCurrRoom} currRoom={currRoom} setMoveCount={setMoveCount} moveCount={moveCount}
            />
            </div>}
        </div>
    )
}

export default Content
