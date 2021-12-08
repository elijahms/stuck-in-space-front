import React, {useState} from 'react'
import { StepDescription } from 'semantic-ui-react';
import Typewriter from 'typewriter-effect';
import { Form, Input } from 'semantic-ui-react'

const GameStart = ({setCollectedUser, setCurrRoom, displayText, setDisplayText}) => {
    
    let style = {
        color: "#4AF626",
        // border: "1px solid #4AF626",
        height: "205px",
        marginTop: "1%",
        marginBottom: "1%",
        fontFamily: 'TerminalFont'
    }
    function handleSubmit(e) {
        e.preventDefault()
        if (form.username.length < 3 || form.email === null) {
            setDisplayText("please add a valid information")
        } else {
        // Add fetch post here that appends username
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
        })
        setCollectedUser(true)
        setCurrRoom(1)
        setDisplayText(`Welcome ${form.username}, you've been abducted!`)
        }
    }

    const [form, setForm] = useState({
        username: 0,
        email: null
    })


    function handleChange(e) {
        setForm({...form, [e.target.name]: e.target.value})
    }

    let formStyle = {
        width: "100%", 
        background: "black", 
        fontFamily: 'TerminalFont', 
        color: "#4AF626",
        border: "hidden"
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
                    }}
                    />
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