import { createSlice } from '@reduxjs/toolkit';
const URL_API = 'https://fakestoreapi.com/products?limit=9';

// const initialProductState = { productList: [] };
export const productSlice = createSlice({
  name: 'products',
  initialState: { productList: [] },
  reducers: {
    setProductList: (state, action) => {
      state.productList = action.payload;
    },
  },
});

export const { setProductList } = productSlice.actions;
export default productSlice.reducer;
export const fetchAllProducts = () => (dispatch) =>
  fetch(URL_API)
    .then((res) => res.json())
    .then((data) => dispatch(setProductList(data)))
    .catch((error) => console.error(error));
