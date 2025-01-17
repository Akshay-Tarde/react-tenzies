import Die from "./Die"

export default function App() {
    return (
        <main>
            <div className="dice-container">
                <Die className="die" value={1}/>
                <Die className="die" value={2}/>
                <Die className="die" value={3}/>
                <Die className="die" value={4}/>
                <Die className="die" value={5}/>
                <Die className="die" value={6}/>
                <Die className="die" value={4}/>
                <Die className="die" value={3}/>
                <Die className="die" value={5}/>
                <Die className="die" value={1}/>
            </div>
        </main>
    )
}