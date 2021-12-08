import Typewriter from 'typewriter-effect';

const DisplayText = ({displayText}) => {
    
    let style = {
        color: "#4AF626",
        marginTop: "1%",
        marginBottom: "1%",
        fontFamily: 'TerminalFont',
        overflow: "auto",
        height: "90%",
    }
    
    return (
        <div style={style}>
                <Typewriter
                    options={{
                        strings: displayText,
                        autoStart: true,
                        wrapperClassName: "gameStart",
                        delay: 42
                    }}
                    />
        </div>
    )
}

export default DisplayText
