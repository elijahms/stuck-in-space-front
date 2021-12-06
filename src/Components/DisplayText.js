import {useState} from 'react'


const DisplayText = () => {
    
    let style = {
        color: "#4AF626",
        // border: "1px solid #4AF626",
        height: "305px",
        marginTop: "1%",
        marginBottom: "1%",
        fontFamily: 'TerminalFont'
    }

    const [currText, setCurrText] = useState("Room One Test...")
    
    return (
        <div style={style}>
            <h3>{currText}</h3>
        </div>
    )
}

export default DisplayText
