import React from "react"
import Die from "./Die"
import { nanoid } from 'nanoid'
import Confetti from 'react-confetti'


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
    const [diceArray, setDiceArray] = React.useState(() => generateAllNewDice())
    // used the arrow function here as without it, the generateAllNewDice() function runs everytime
    // the State is changed.
    const gameWon =  diceArray.every( item => item.isHeld === true) && diceArray.every( item => item.value === diceArray[0].value)

    const buttonRef = React.useRef(null)
    console.log(buttonRef)
    React.useEffect(() => {
        if (gameWon) {
            buttonRef.current.focus()
        }
    }, [gameWon])
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
        
        if(gameWon) {
            setDiceArray(generateAllNewDice())
        }
        else {
            setDiceArray( oldDice => oldDice.map( die =>
                die.isHeld !== true ? { ...die, value: Math.ceil(Math.random() * 6)} : die 
            ))
        }
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
            {gameWon && <Confetti />}
            <div aria-live="polite" className="sr-only">
                {gameWon && <p>Congratulations! You won! Press "New Game" to start again.</p>}
            </div>
            <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            <div className="dice-container">
                {dieMap}
            </div>
            <button ref={buttonRef} className="roll-dice" onClick={rollDice}>{gameWon ? "NEW GAME" : "ROLL"}</button>
        </main>
    )
}