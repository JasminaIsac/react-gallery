import { useState } from "react";
import Image from "./image";

export default function MainImage(props) {
    const { url, title } = props.image;
    const [audio] = useState(new Audio("src/assets/wiwiwi.mp3"));

    const playAudio = () => {
        audio.play();
    };

    return (
        <div className="mainImageWrapper" onClick={playAudio}>
            <Image src={url} alt={title}></Image>
            <p style={{textAlign:'center'}}>Click on the image to ✨wiwiwi✨</p>
        </div>
    );
}