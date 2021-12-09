import Typewriter from 'typewriter-effect';

const DisplayText = ({displayText}) => {
    
    return (
        <div>
            <Typewriter
                options={{
                    strings: displayText,
                    autoStart: true,
                    wrapperClassName: "game-start",
                    delay: 42
                }}
                />
        </div>
    )
}

export default DisplayText
