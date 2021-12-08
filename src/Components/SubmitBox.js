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
        // if (targetedObject.talk_choice_1){

        // }
        if (["inspect", "attack", "use", "talk", "inventory","take"].includes(input[0].toLowerCase()) && itemNames.includes(input[input.length-1].toLowerCase())) {
            let verb = input[0].toLowerCase()
            let item = input[input.length-1]
            if (verb=="take"){
                handleTake(item)
            }
            if (verb=="inspect"){
                handleInspect(item)
            }
            if (verb=="attack"){
                handleAttack(item)
            }
            if (verb=="talk"){
                handleTalk(item)
            }
            e.target.reset()
            // return "Acceptable Verb"
        }
        else if (["h","i","r","e","help","inventory","return","exit"].includes(input[0].toLowerCase())){
            let verb = input[0].toLowerCase()
            if (verb=="h" || verb=="help"){
                handleHelp()
            }
            if (verb=="i" || verb=="inventory"){
                handleInventory()
            }
            if (verb=="r" || verb=="return"){
                handleReturn()
            }
        }
        else {
            console.log("bad");
            console.log(input[1])
            e.target.reset()
            return "We don't recognize that"
            
        }
    }

    function handleReturn(){
        setDisplayText(roomInfo.description)
    }

    function handleInventory(){
        if (inventory.length >0){
        let invtext= inventory.map((i) => i.name)
        setDisplayText(invtext.toString())
        }
        else {
            setDisplayText("Your inventory is empty!")
        }
    }

    function handleHelp() {
        setDisplayText(`Interact with the world by using commands on objects in it. \n
        Format your messages in the form of a COMMAND OBJECT \n
        Not all commands will work on all objects! ex You can't TAKE a person or TALK to a window! \n
        ~~~ COMMANDS ~~~ \n
        INSPECT: Inspect an object to receive a detailed description of that object \n
        TAKE: Take an object to add it to your inventory \n
        TALK: Talk to to an object/person and they might talk back! \n
        USE: Use an item in your inventory on an object in the room. \n
        ATTACK: Attack an object/person in the room \n
        ~~~ ADDITIONAL OPTIONS ~~~
        H: Type H for the Help menu \n
        I: Type I to view the items you are currently carrying \n
        R: Type R to return to the description of the room you are currently in \n
        E: Type E to exit the room you are currently in, this will only work when you have cleared the room's objectives
        `)
    }

    function handleTalk(item){
        let foundItem = items.find(i => i.name.toLowerCase()==item.toLowerCase())
        setTargetedObject(foundItem)
        if (foundItem.is_talkable=false){
            setDisplayText(`You can't talk to ${foundItem.name}! Sorry!`)
            return `You can't talk to ${foundItem.name}! Sorry!`
        }
        if (foundItem.is_talkable=true){
            setDisplayText(`${foundItem.talk_response}`)
                }
            }

    function handleAttack(item){
        let foundItem = items.find(i => i.name.toLowerCase()==item.toLowerCase())
        setDisplayText(foundItem.attack_response)
        console.log(foundItem.triggers_on)
        console.log(foundItem.exit_trigger)
        if (foundItem.triggers_on=="attack"){
            foundItem.exit_trigger=true
            console.log(foundItem.exit_trigger)}
    }

    function handleInspect(item){
        let foundItem = items.find(i => i.name.toLowerCase()==item.toLowerCase())
        setTargetedObject(foundItem)
        setDisplayText(foundItem.description)
        console.log(foundItem.triggers_on)
        console.log(foundItem.exit_trigger)
        if (foundItem.triggers_on=="inspect"){
            foundItem.exit_trigger=true
            console.log(foundItem.exit_trigger)}
        console.log(foundItem.description)
        return foundItem.description
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
                foundItem.exit_trigger=true
                inventory.push(foundItem)
                setDisplayText(`You picked up ${foundItem.name}!`)
                console.log(`You picked up ${foundItem.name}!`)
                console.log(inventory)
                return `You picked up ${foundItem.name}!`

            }
        }
    }

    return (
        <div style={style}>
            <form onSubmit={handleSubmit}>
            <input style={{width: "90%", background: "black", fontFamily: 'TerminalFont', color: "#4AF626"}} placeholder="Elijah:\\Room_One>>" onChange={handleChange}></input>
            </form>
        </div>
    )
}

export default SubmitBox
