import Typewriter from 'typewriter-effect';

const DisplayText = ({displayText, displayFastText}) => {
    
    return (
        <div className="main-display">
            <Typewriter
                options={{
                    strings: displayText,
                    autoStart: true,
                    wrapperClassName: "game-start",
                    delay: 35,
                    cursor: ""
                }}
                />
                {/* <Typewriter
                options={{
                    strings: displayFastText,
                    autoStart: true,
                    wrapperClassName: "game-start",
                    delay: 0,
                    cursor: ''
                }}
                /> */}
                <p>{displayFastText}</p>
        </div>
    )
}

export default DisplayText
