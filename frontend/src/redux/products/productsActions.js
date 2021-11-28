import { SET_PRODUCTS, SET_PRODUCT, SET_PRODUCT_LOADED } from './productsTypes';
import { SET_UI_LOADING } from '../ui/uiTypes';
import { batch } from 'react-redux';
import axios from 'axios';

// ------------------------------------------------------------------------
//  FETCH PRODUCT BY SLUG
// ------------------------------------------------------------------------
export const fetchProductBySlug = (slug) => async (dispatch) => {
  try {
    dispatch({
      type: SET_PRODUCT_LOADED,
      payload: false,
    });

    const { data } = await axios.get(`/api/v1/products/product/${slug}`);

    batch(() => {
      dispatch({
        type: SET_PRODUCT,
        payload: data.data,
      });
      dispatch({
        type: SET_PRODUCT_LOADED,
        payload: true,
      });
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: SET_PRODUCT_LOADED,
      payload: false,
    });
  }
};

// ------------------------------------------------------------------------
//  FETCH PRODUCTS
// ------------------------------------------------------------------------
export const fetchProductSuggestions =
  (catalog, quantity, excludeId = null) =>
  async (dispatch) => {
    try {
      dispatch({
        type: SET_UI_LOADING,
        payload: { fetchLoader: true },
      });

      let res;
      if (excludeId) {
        res = await axios.get(
          `/api/v1/products?_id[ne]=${excludeId}&catalog=${catalog}&limit=${quantity}&fields=name,slug,price,ratingsAverage,subcategory&sort=-sold,-createdAt`
        );
      } else {
        res = await axios.get(
          `/api/v1/products?catalog=${catalog}&limit=${quantity}&fields=name,slug,price,ratingsAverage,subcategory&sort=-sold,-createdAt`
        );
      }
      const { data } = res;

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
