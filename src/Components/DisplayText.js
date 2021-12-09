import Typewriter from 'typewriter-effect';

const DisplayText = ({displayText}) => {
    
    return (
        <div className="main-display">
            <Typewriter
                options={{
                    strings: displayText,
                    autoStart: true,
                    wrapperClassName: "game-start",
                    delay: 35
                }}
                />
        </div>
    )
}

export default DisplayText
