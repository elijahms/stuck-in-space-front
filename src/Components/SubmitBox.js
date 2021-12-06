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
            is_talkable: true,
            is_takeable: true,
            talk_choice_1: "th",
            talk_choice_2: "dfdf",
            inspect_choice_1: "45433",
            inspect_choice_2: "223",
            catalyst_item: 3,
            catalyst_response: "String",
            is_attackable: true,
            when_attacked: "String",
            when_talked: "String",
            exit_trigger: 2,
            triggers_on: "Item"
        },
        {
            name: "Person",
            is_talkable: true,
            is_takeable: true,
            talk_choice_1: "th",
            talk_choice_2: "dfdf",
            inspect_choice_1: "45433",
            inspect_choice_2: "223",
            catalyst_item: 3,
            catalyst_response: "String",
            is_attackable: true,
            when_attacked: "String",
            when_talked: "String",
            exit_trigger: 2,
            triggers_on: "Item"
        }
    ]

    let itemNames = [...items].map((i) => i.name)

    console.log(itemNames);
    
    
    //Handles the text in the Submit Box
    function handleChange(e) {
        setSub(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        let input = sub.split(" ")
        console.log(input);
        if (["inspect", "attack", "use", "talk", "inventory"].includes(input[0].toLowerCase()) && itemNames.includes(input[1].toLowerCase())) {
            console.log("Good");
            return "Acceptable Verb"
        } else {
            console.log("bad");
            return "We dont recognize that"
        }
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
