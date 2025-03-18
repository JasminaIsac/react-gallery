export default function Image (props) {
    return(
        <img className={`catImage ${props.className || ""}`} src={props.src} alt={props.alt}></img>
    )
}