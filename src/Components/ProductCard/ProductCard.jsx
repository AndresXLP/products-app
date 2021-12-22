import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Timer from '../Timer';
import './style.scss';
export const ProductCard = ({ title, img, id, dateNow, ...items }) => {
  const Navigate = useNavigate();
  const { timeLimit } = useSelector((state) => state.timer);
  return (
    <div className="contentCard">
      <p className="contentCard__title">{title}</p>
      <img src={img} alt={title} className="contentCard__img" />
      {timeLimit.length &&
      timeLimit.find((e) => e.id === id).limit - dateNow <= 0 ? (
        <button
          type="button"
          className="contentCard__button"
          onClick={() => alert('Refresh Page')}
        >
          Go to details
        </button>
      ) : (
        <button
          type="button"
          className="contentCard__button"
          onClick={() =>
            Navigate(`/details/${id}`, {
              state: { ...items },
            })
          }
        >
          Go to details
        </button>
      )}

      <div className="contentCard__footer">
        <Timer id={id} className="contentCard__counter" />
      </div>
    </div>
  );
};
ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  dateNow: PropTypes.number.isRequired,
};
