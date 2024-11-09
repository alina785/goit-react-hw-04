import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

const ImageGallery = ({ images, onClick }) => {
  if (!images.length) return null;
  return (
    <ul className={s.list}>
      {images.map((image) => (
        <li key={image.id} className={s.item}>
          <ImageCard image={image} onClick={onClick} />
        </li>
      ))}
    </ul>
  );
};
export default ImageGallery;