import React from "react"
import Die from "./Die"
import { nanoid } from 'nanoid'


export default function App() {
    function generateAllNewDice() {
        const newDice = []
        
        for ( let i = 0; i < 10; i++) {
            const randNum = Math.floor(Math.random() * 7)
            const obj = {
                value: randNum,
                isHeld: false,
                id: nanoid()
            }
            newDice.push(obj)
        }
        return newDice
    }
    const [diceArray, setDiceArray] = React.useState(generateAllNewDice())
    
    // console.log(diceArray)
    // functional programming approach
    // function generateAllNewDice() {
    //     return new Array(10)
    //         .fill(0)
    //         .map(() => Math.ceil(Math.random() * 6))
    // }
    

    const dieMap = diceArray.map(item => <Die 
                                            key={item.id}
                                            id = {item.id} 
                                            isHeld={item.isHeld} 
                                            value={item.value}
                                            hold={hold}
                                            /> )

    function rollDice() {
        setDiceArray( oldDice => oldDice.map( die =>
            die.isHeld !== true ? { ...die, value: Math.ceil(Math.random() * 6)} : die 
        ))
    }

    function hold(id) {
        const dieToHold = diceArray.map(function (item) {
            if (item.id === id) {
                item.isHeld = !item.isHeld
            }
            return item
        })

        setDiceArray(dieToHold)
    }

    return (
        <main>
            <div className="dice-container">
                {dieMap}
            </div>
            <button className="roll-dice" onClick={rollDice}>ROLL</button>
        </main>
    )
}