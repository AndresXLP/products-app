import { useSelector } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import './style.scss';
export const Details = () => {
  const Navigate = useNavigate();
  const { state } = useLocation();
  const { rest: item } = state;
  return (
    <div className="product">
      <div className="itemCard">
        <h1 className="itemCard__title">{item.title}</h1>
        <img className="itemCard__img" src={item.image} />
        <p className="itemCard__category">
          <strong>Category:</strong> {item.category}
        </p>
        <p className="itemCard__description">
          <strong>Description:</strong> {item.description}
        </p>
        <h2 className="itemCard__price">Price: $ {item.price}</h2>
        <span className="itemCard__other">
          Rate: {item.rating.rate} | Inventory: {item.rating.count}
        </span>
        <div className="itemCard__button_group">
          <button className="button" onClick={() => Navigate(`/`)}>
            Go Home
          </button>
          <button className="button">Go About</button>
        </div>
      </div>
    </div>
  );
};
