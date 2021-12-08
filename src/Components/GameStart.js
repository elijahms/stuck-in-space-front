import {useState} from 'react'
import Typewriter from 'typewriter-effect'


const GameStart = ({setCollectedUser, setCurrRoom, displayText, setDisplayText, setUserDetails}) => {

    const [form, setForm] = useState({
        username: 0,
        email: null
    })

    let formStyle = {
        width: "100%", 
        background: "black", 
        fontFamily: 'TerminalFont', 
        color: "#4AF626",
        border: "hidden"
    }

    function handleSubmit(e) {
        e.preventDefault()
        let checkUser = []
        fetch(`http://localhost:9292/allusers`)
        .then((r) => r.json())
        .then((data) => {
            checkUser = data;
            console.log(checkUser);
            console.log(form.username);
        })
        if (form.username.length < 3 || form.email === null) {
            setDisplayText("please add a valid information")
        } else {
            if (checkUser.includes(form.username)) {
                alert("sneaky bastard")
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
                }
        }
    }

    function handleChange(e) {
        setForm({...form, [e.target.name]: e.target.value})
    }
    
    return (
        <div>
            <div style={{height: "280px"}}>
                <Typewriter
                    options={{
                        strings: displayText,
                        autoStart: true,
                        wrapperClassName: "gameStart",
                        delay: 42
                    }}/>
            </div>
            <form onSubmit={handleSubmit}>
                <input className="no-outline" style={formStyle} onChange={handleChange} name="username" placeholder="main://>>username" type="text"></input>
                <input className="no-outline" style={formStyle} onChange={handleChange} name="email" placeholder="main://>>email" type="email"></input>
                <button className="play-button" style={formStyle}>Play</button>
            </form>
        </div>
    )
}

export default GameStart