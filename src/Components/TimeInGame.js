import {useEffect} from 'react'

const TimeInGame = ({collectedUser, second, minute, setMinute, setSecond}) => {

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
        <div className="banner-details">
            <p>Time Playing: {minute}:{second}</p>
        </div>
    )
}

export default TimeInGame
