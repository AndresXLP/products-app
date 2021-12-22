import { configureStore } from '@reduxjs/toolkit';
import products from './Slices/Products';
import timer from './Slices/Timer';

export default configureStore({
  reducer: { products, timer },
});
