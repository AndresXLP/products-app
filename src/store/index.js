import { configureStore } from '@reduxjs/toolkit';
import products from './Slices/Products';

export default configureStore({
  reducer: { products },
});
