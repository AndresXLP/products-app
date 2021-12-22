import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllProducts } from '../../store/Slices/Products';
import { updateTime } from '../../store/Slices/Timer';
import { ProductCard } from '../ProductCard/ProductCard';

import './style.scss';
export const Products = () => {
  const { productList } = useSelector((state) => state.products);
  const { dateNow } = useSelector((state) => state.timer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);
  useEffect(() => {
    const countDownTimer = setTimeout(() => {
      dispatch(updateTime());
    }, 1000);
    return () => clearTimeout(countDownTimer);
  }, [dispatch, dateNow]);
  return (
    <div className="product">
      <div className="product__grid">
        {productList.map((item) => (
          <ProductCard
            key={item.id}
            title={item.title}
            img={item.image}
            id={item.id}
            dateNow={dateNow}
          />
        ))}
      </div>
    </div>
  );
};
