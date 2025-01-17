import React from "react"
import Die from "./Die"

export default function App() {
    function generateAllNewDice() {
        const newDice = []
        
        for ( let i = 0; i < 10; i++) {
            const randNum = Math.floor(Math.random() * 7)
            newDice.push(randNum)
        }
        return newDice
    }
    const [diceArray, setDiceArray] = React.useState(generateAllNewDice())
    

    // functional programming approach
    // function generateAllNewDice() {
    //     return new Array(10)
    //         .fill(0)
    //         .map(() => Math.ceil(Math.random() * 6))
    // }
    function rollDice() {
        setDiceArray(generateAllNewDice())
    }

    const dieMap = diceArray.map(item => <Die value={item}/> )

    return (
        <main>
            <div className="dice-container">
                {dieMap}
            </div>
            <button className="roll-dice" onClick={rollDice}>ROLL</button>
        </main>
    )
}