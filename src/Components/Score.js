
const Score = ({score}) => {
    
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

    return (
        <div style={gridStyle}>
            <p>Score: {score}</p>
        </div>
    )
}

export default Score
