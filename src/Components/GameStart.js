import {useState} from 'react'
import Typewriter from 'typewriter-effect'


const GameStart = ({setCollectedUser, setCurrRoom, displayText, setDisplayText, setUserDetails}) => {

    const [form, setForm] = useState({
        username: "0",
        email: null
    })

    function handleChange(e) {
        setForm({...form, [e.target.name]: e.target.value})
    }

    const [checkUser, setCheckUser] = useState([])

    function handleSubmit(e) {
        e.preventDefault()
        let checkUser = []
        fetch(`http://localhost:9292/allusers`)
        .then((r) => r.json())
        .then((data) => {
            setCheckUser(data);
        })
        if (form.username.length < 3 || form.email === null) {
            setDisplayText("please add a valid information")
            e.target.reset()
        } else {
            if ([...checkUser].includes(form.username)) {
                setDisplayText(`${form.username} already exists!`)
                e.target.reset()
            } else {
                fetch(`http://localhost:9292/newuser`, {
                    method: "POST",
                    headers: {
                        "Content-Type" : "application/json"
                    },
                    body: JSON.stringify(form)
                })
                .then((r) => r.json())
                .then((data) => {
                    console.log(data);
                    setUserDetails(data)
                })
                setCollectedUser(true)
                setCurrRoom(1)
                setDisplayText(`Welcome ${form.username}, you've been abducted!`)
                e.target.reset()
                }
            }  
    }
    
    return (
        <div>
                <Typewriter
                    options={{
                        strings: displayText,
                        autoStart: true,
                        wrapperClassName: "game-start",
                        delay: 40
                    }}/>
            <form onSubmit={handleSubmit}>
                <input className="no-outline" onChange={handleChange} name="username" placeholder="main://>>username" type="text"></input>
                <input className="no-outline" onChange={handleChange} name="email" placeholder="main://>>email" type="email"></input>
                <button className="play-button">Play</button>
            </form>
        </div>
    )
}

export default GameStart