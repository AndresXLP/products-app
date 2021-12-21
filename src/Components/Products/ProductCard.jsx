import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllProducts } from '../../store/Slices/Products';

export const ProductCard = () => {
  const { productList } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);
  return (
    <>
      <div className="card border-3" style={{ width: '18rem' }}>
        {productList.map((item) => {
          return (
            <>
              <img src={item.image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </>
          );
        })}
      </div>
      ;
    </>
  );
};
