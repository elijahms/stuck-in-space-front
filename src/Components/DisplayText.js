import {useState} from 'react'


const DisplayText = ({displayText, setDisplayText}) => {
    
    let style = {
        color: "#4AF626",
        // border: "1px solid #4AF626",
        height: "305px",
        marginTop: "1%",
        marginBottom: "1%",
        fontFamily: 'TerminalFont'
    }
    
    return (
        <div style={style}>
            <h3>{displayText}</h3>
        </div>
    )
}

export default DisplayText
