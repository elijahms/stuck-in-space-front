import React from 'react'
import Score from './Score'
import TimeInGame from './TimeInGame'
import TimeInRoom from './TimeInRoom'
import DisplayText from './DisplayText'
import SubmitBox from './SubmitBox'
import GameStart from './GameStart'
import {useState} from 'react'
import { Grid, Button} from 'semantic-ui-react'

const Content = () => {
    
    let style = {
        width: "50%",
        height: "400px",
        border: "2px solid white",
        margin: "0 auto",
        padding: "1%"

    }

    let gridStyle = {
        display: "inline-grid",
        justifyContent: "center",
        alignItems: "center",
        width: "33%",
        color: "#4AF626",
        fontFamily: 'TerminalFont',
        border: "1px solid white"
    }
    
    const [collectedUser, setCollectedUser] = useState(false)
    const [currRoom, setCurrRoom] = useState(0)
    
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
                <TimeInRoom currRoom={currRoom}/>
                </Grid.Column>
            </Grid>
            {!collectedUser ? <GameStart setCollectedUser={setCollectedUser} setCurrRoom={setCurrRoom} /> :
            <div>
            <DisplayText />
            <SubmitBox />  
            </div>}
        </div>
    )
}

export default Content
