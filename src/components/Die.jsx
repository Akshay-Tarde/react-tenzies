export default function Die(props) {
    // console.log(props.isHeld)
    return (
        <button className={props.isHeld ? "die die-held" : "die"} 
        onClick={() => props.hold(props.id)}
        aria-pressed={props.isHeld}
        aria-label={`Die with value ${props.value}, ${props.isHeld ? "held" : "not held"}`
        }>
            {props.value}
        </button>
    )
}