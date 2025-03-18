import PrevImg from "../assets/previous.svg";
import RandomImg from "../assets/random1.svg";
import RandomizeImg from "../assets/random2.svg";
import NextImg from "../assets/next.svg";


export default function Buttons({
    prevClick,
    randomClick,
    randomizeClick,
    nextClick,
}) {

    return(
        <div className="buttonWrapper">
            <button className="button" id="prevBtn" onClick={prevClick}><img src={PrevImg}></img></button>
            <button className="button" id="randomBtn" onClick={randomClick}><img src={RandomImg}></img></button>
            <button className="button" id="randomizeGalleryBtn" onClick={randomizeClick}><img src={RandomizeImg}></img></button>
            <button className="button" id="nextBtn" onClick={nextClick}><img src={NextImg}></img></button>
        </div>
    )
}
