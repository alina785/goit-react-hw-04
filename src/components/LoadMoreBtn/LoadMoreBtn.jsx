import s from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ loadMore }) => (
  <button onClick={loadMore} className={s.btn}>
    Load more
  </button>
);

export default LoadMoreBtn;