import { useState } from 'react'

const SubmitBox = () => {
    // Stlying for the Submit Box
    let style = {

    }
    
    //State of the Submit Box
    const [sub, setSub] = useState(null)

    let room = {
        name: "First Room",
        description: "You see a Wild Wes and he is eating the rich. He looks at you as you appear, and smells your money. There is a cup of coffee, a Settlers of Catan, and a Apple watch."
    }
    let items = [ 
        {
            name: "Book",
            is_talkable: 0,
            is_takeable: 1,
            talk_choice_1: "th",
            talk_choice_2: "dfdf",
            inspect_choice_1: "45433",
            inspect_choice_2: "223",
            catalyst_item: 3,
            catalyst_response: "String",
            is_attackable: 0,
            when_attacked: "String",
            when_talked: "String",
            exit_trigger: 1,
            triggers_on: "Item"
        },
        {
            name: "Person",
            is_talkable: 1,
            is_takeable: 0,
            talk_choice_1: "th",
            talk_choice_2: "dfdf",
            inspect_choice_1: "45433",
            inspect_choice_2: "223",
            catalyst_item: 3,
            catalyst_response: "String",
            is_attackable: 1,
            when_attacked: "String",
            when_talked: "String",
            exit_trigger: 1,
            triggers_on: "Item"
        }
    ]

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
            return "We dont recognize that"
            
        }
    }

    function handleTake(item){
        let foundItem = items.find(i => i.name.toLowerCase()==item.toLowerCase())
        console.log(foundItem)
        console.log(inventory)
        if (foundItem.is_takeable==0){
            console.log(`You can't Take the ${foundItem.name}! Sorry!`)
            return `You can't Take the ${foundItem.name}! Sorry!`
        }
        else {
            if (inventory.includes(foundItem)){
                console.log(`You already have the ${foundItem.name}!`)
                return `You already have the ${foundItem.name}!`
            }
            else {
                foundItem.exit_trigger=1
                inventory.push(foundItem)
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
