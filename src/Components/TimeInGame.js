import React, {useEffect, useState} from 'react'

const TimeInGame = ({collectedUser, second, minute, setMinute, setSecond}) => {

    let gridStyle = {
        display: "inline-grid",
        justifyContent: "center",
        alignItems: "center",
        margin: "1%",
        padding: "1%",
        color: "#4AF626",
        width: "33%",
        fontFamily: 'TerminalFont',
        border: "1px solid white",
        fontSize: "1em",
        borderRight: "2px solid white"
    }

    useEffect(() => {
        if (collectedUser) {
            let totalSeconds = 0
            
            let timeInterval = setInterval(setTime, 1000);
            function setTime() {

                ++totalSeconds;
                setSecond(pad(totalSeconds % 60));
                setMinute(pad(parseInt(totalSeconds / 60)));
            }
        
            function pad(val) {
                let valString = val + "";
                if (valString.length < 2) {
                    return "0" + valString;
                } else {
                    return valString;
                }
            }

            return () => {
                timeInterval.clearInterval()
            }
        }

    }, [collectedUser])
    
    return (
        <div style={gridStyle}>
            <p>Time Playing: {minute}:{second}</p>
        </div>
    )
}

export default TimeInGame
