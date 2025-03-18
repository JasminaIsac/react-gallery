import Image from './image';

export default function Gallery({ cats, currentImage, setCurrentImage }) {
    return (
        <div className="gallery">
            {cats.map((i) => (
                <Image
                    key={i.id}
                    src={i.url}
                    alt={i.title}
                    className={i.id === currentImage.id ? `${"selected"}` : ""}
                    onClick={() => setCurrentImage(i)}
                />
            ))}
        </div>
    );
}