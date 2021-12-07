import { useState, useEffect } from 'react'

const SubmitBox = ({displayText, setDisplayText, setCurrRoom, currRoom}) => {
    // Stlying for the Submit Box
    let style = {

    }
    
    //State of the Submit Box
    const [sub, setSub] = useState(null)
    const [items, setItems] = useState([])
    const [roomInfo, setRoomInfo] = useState([])


    useEffect(() => {
        fetch(`http://localhost:9292/room/${currRoom}`)
        .then((r) => r.json())
        .then((data) => {
            setRoomInfo(data)
            console.log(data);
        })
    
        fetch(`http://localhost:9292/item/${currRoom}`)
        .then((r) => r.json())
        .then((data) => {
            setItems(data)
            console.log(data);
        })
    }, [])


    let itemNames = [...items].map((i) => i.name.toLowerCase())
    let inventory = []

    console.log(itemNames);
    
    
    //Handles the text in the Submit Box
    function handleChange(e) {
        setSub(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        let input = sub.split(" ")
        console.log(input);
        if (["inspect", "attack", "use", "talk", "inventory","take"].includes(input[0].toLowerCase()) && itemNames.includes(input[1].toLowerCase())) {
            console.log("Good");
            console.log(input[1])
            if (input[0].toLowerCase()=="take"){
                handleTake(input[1])
            }
            e.target.reset()
            // return "Acceptable Verb"
        } else {
            console.log("bad");
            console.log(input[1])
            e.target.reset()
            return "We don't recognize that"
            
        }
    }

    function handleTake(item){
        let foundItem = items.find(i => i.name.toLowerCase()==item.toLowerCase())
        console.log(foundItem)
        console.log(inventory)
        if (foundItem.is_takeable==0){
            setDisplayText(`You can't Take the ${foundItem.name}! Sorry!`)
            console.log(`You can't Take the ${foundItem.name}! Sorry!`)
            return `You can't Take the ${foundItem.name}! Sorry!`
        }
        else {
            if (inventory.includes(foundItem)){
                setDisplayText(`You already have the ${foundItem.name}!`)
                console.log(`You already have the ${foundItem.name}!`)
                return `You already have the ${foundItem.name}!`
            }
            else {
                foundItem.exit_trigger=1
                inventory.push(foundItem)
                setDisplayText(`You picked up ${foundItem.name}!`)
                console.log(`You picked up ${foundItem.name}!`)
                console.log(inventory)
                return `You picked up ${foundItem.name}!`

            }
        }
    }

    function handleInspect(item){

    }

    return (
        <div style={style}>
            <form onSubmit={handleSubmit}>
            <input style={{width: "100%", background: "black", fontFamily: 'TerminalFont', color: "#4AF626"}} placeholder="Elijah:\\Room_One>>" onChange={handleChange}></input>
            </form>
        </div>
    )
}

export default SubmitBox
