import React, {useState} from 'react'

const GameStart = ({setCollectedUser, setCurrRoom}) => {
    
    function handleSubmit(e) {
        e.preventDefault()
        console.log(form);
        // Add fetch post here that appends username
        // fetch(`blank.com/eats`, {
        //     method: "POST",
        //     headers: {
        //         "Content-Type" : "application/json"
        //     },
        //     body: JSON.stringify(form)
        // })
        // .then((r) => r.json())
        // .then((data) => {
        //     console.log(data);
        // })
        setCollectedUser(true)
        setCurrRoom(1)
    }

    const [form, setForm] = useState({
        username: null,
        email: null
    })

    function handleChange(e) {
        setForm({...form, [e.target.name]: e.target.value})
    }
    
    return (
        <div>
            <p style={{height: "300px"}} >Enter the realm of OUTER SPACE and attempt to make your way out, beware meteors, exploding sattelites, and Jeff Bezos</p>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} name="username" placeholder="username"></input>
                <input onChange={handleChange} name="email" placeholder="email"></input>
                <button>Play</button>
            </form>
        </div>
    )
}

export default GameStart
