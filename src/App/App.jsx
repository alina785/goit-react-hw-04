import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { fetchImages } from "../servises/api";
import SearchBar from "../components/SearchBar/SearchBar";
import ImageGallery from "../components/ImageGallery/ImageGallery";
import Loader from "../components/Loader/Loader";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../components/ImageModal/ImageModal";

const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [modaImage, setModalImage] = useState(null);

  useEffect(() => {
    if (!query) return;

    const fetchImagesData = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchImages(query, page);
        setImages((prev) => [...prev, ...data.results]);
      } catch {
        setError("Could not fetch images. Please try again later");
      } finally {
        setLoading(false);
      }
    };
    fetchImagesData();
  }, [query, page]);

  const handleSubmit = (searchQuery) => {
    if (!searchQuery) {
      toast.error("Please enter a serarch term.");
      return;
    }
    setQuery(searchQuery);
    setImages([]);
    setPage(1);
  };

  const handleClick = (image) => {
    setModalImage(image);
  };

  const loadMore = () => {
    setPage((pervPage) => pervPage + 1);
  };

  const handleCloseModal = () => {
    setModalImage(null);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      {error && <ErrorMessage message={error} />}
      <ImageGallery images={images} onClick={handleClick} />
      {loading && <Loader />}
      {images.length > 0 && !loading && <LoadMoreBtn loadMore={loadMore} />}
      <ImageModal image={modaImage} onClose={handleCloseModal} />
    </div>
  );
};

export default App;