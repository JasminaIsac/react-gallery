import { useState } from "react";
import Gallery from "./components/gallery";
import images from './data/images.json';
import MainImage from "./components/mainImage";
import Buttons from "./components/buttons";

function App() {
const [cats, setCats] = useState(images)
const [currentImage, setCurrentImage] = useState(cats[0]);

function randomImage() {
    setCurrentImage(cats[Math.floor(Math.random() * (cats.length - 0)) + 0])
}

function randomizeImages(){
    const shuffledCats = [...cats].sort(() => Math.random() - 0.5);
    setCats(shuffledCats);
}

function prev(){
    const currentIndex = cats.indexOf(currentImage);
    if(currentIndex > 0){
        setCurrentImage(cats[currentIndex-1]);
    }
}

function next(){
    const currentIndex = cats.indexOf(currentImage);
    if(currentIndex < cats.length - 1){
        setCurrentImage(cats[currentIndex+1]);
    }
}

return <>
<div id="imageSection">
    <MainImage image={currentImage}></MainImage>
    <Buttons 
        prevClick={prev}
        randomClick={randomImage}
        randomizeClick={randomizeImages}
        nextClick={next}
    ></Buttons>
</div>
<div id="gallerySection">
    <h1>Gallery</h1>
    <Gallery cats={cats} currentImage={currentImage}></Gallery>
</div>
</>;
}

export default App;
