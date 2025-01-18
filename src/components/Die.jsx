export default function Die(props) {
    // console.log(props.isHeld)
    return (
        <button className={props.isHeld ? "die die-held" : "die"} onClick={() => props.hold(props.id)}>{props.value}</button>
    )
}