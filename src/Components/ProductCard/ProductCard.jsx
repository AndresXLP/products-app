import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Timer from '../Timer';
import './style.scss';

export const ProductCard = ({ title, img, id, dateNow }) => {
  const { timeLimit } = useSelector((state) => state.timer);
  return (
    <div className="contentCard">
      <img
        src={img}
        alt={title}
        style={{
          height: '100px',
          width: 'auto',
          alignItems: 'center',
        }}
      />

      <p className="contentCard__title">{title}</p>
      {timeLimit.length &&
      timeLimit.find((e) => e.id === id).limit - dateNow <= 0 ? (
        <button
          type="button"
          className="contentCard__button"
          onClick={() => console.log('Working')}
        >
          Go to detail
        </button>
      ) : (
        <button
          type="button"
          className="contentCard__button"
          onClick={() => alert('ok ok')}
        >
          Go to detail
        </button>
      )}

      <div className="contentCard__footer">
        <Timer id={id} className="productCard__counter" />
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
