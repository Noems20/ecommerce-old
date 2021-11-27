import { SET_PRODUCTS } from './productsTypes';
import { SET_UI_LOADING } from '../ui/uiTypes';
import { batch } from 'react-redux';
import axios from 'axios';

// ---------------------------- FETCH SERVICES ----------------------------
export const fetchProductsHome = (catalog) => async (dispatch) => {
  try {
    dispatch({
      type: SET_UI_LOADING,
      payload: { fetchLoader: true },
    });

    const { data } = await axios.get(
      `/api/v1/products?catalog=${catalog}&limit=8&fields=name,slug,price,ratingsAverage,subcategory&sort=-sold,-createdAt`
    );

    batch(() => {
      dispatch({
        type: SET_PRODUCTS,
        payload: data.data,
      });
      dispatch({
        type: SET_UI_LOADING,
        payload: { fetchLoader: false },
      });
    });
  } catch (error) {
    console.log(error);
  }
};
