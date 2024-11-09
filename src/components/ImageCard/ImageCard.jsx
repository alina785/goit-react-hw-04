import s from "./ImageCard.module.css";

const ImageCard = ({ image, onClick }) => (
  <div onClick={() => onClick(image)}>
    <img src={image.urls.small} alt={image.alt_description} className={s.img} />
  </div>
);

export default ImageCard;
