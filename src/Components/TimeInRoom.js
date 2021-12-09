
const TimeInRoom = ({currRoom, moveCount}) => {
    let gridStyle = {
        display: "inline-grid",
        justifyContent: "center",
        alignItems: "center",
        margin: "2%",
        padding: "2px",
        color: "#4AF626",
        width: "33%",
        fontFamily: 'TerminalFont',
        border: "1px solid white",
        fontSize: "1em",
    }
    return (
        <div style={gridStyle}>
            <p>Moves Taken: {moveCount}</p>
        </div>
    )
}

export default TimeInRoom
