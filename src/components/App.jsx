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
    const gameWon =  diceArray.every( item => item.isHeld === true) && diceArray.every( item => item.value === diceArray[0].value)

    if (gameWon) {
            console.log("Game won! ")
    }
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
            <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            <div className="dice-container">
                {dieMap}
            </div>
            <button className="roll-dice" onClick={rollDice}>{gameWon ? "NEW GAME" : "ROLL"}</button>
        </main>
    )
}