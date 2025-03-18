export default function Buttons (props) {
    const prevClick = props.prevClick;
    const randomClick = props.randomClick;
    const randomizeClick = props.randomizeClick;
    const nextClick = props.nextClick;

    return(
        <div className="buttonWrapper">
            <button className="button" id="prevBtn" onClick={prevClick}><img src="src\assets\previous.svg"></img></button>
            <button className="button" id="randomBtn" onClick={randomClick}><img src="src\assets\random1.svg"></img></button>
            <button className="button" id="randomizeGalleryBtn" onClick={randomizeClick}><img src="src\assets\random2.svg"></img></button>
            <button className="button" id="nextBtn" onClick={nextClick}><img src="src\assets\next.svg"></img></button>
        </div>
    )
}
