export default function Image (props) {
    const {className, src, alt, onClick } = props;
    return(
        <img className={`catImage ${className || ""}`} src={src} alt={alt} onClick={onClick}></img>
    )
}