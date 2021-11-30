import {
  SET_PRODUCTS,
  SET_PRODUCT,
  SET_PRODUCT_LOADED,
  CLEAR_PRODUCTS,
} from './productsTypes';
import { SET_UI_LOADING } from '../ui/uiTypes';
import { batch } from 'react-redux';
import axios from 'axios';

// ------------------------------------------------------------------------
//  CLEAR PRODUCTS
// ------------------------------------------------------------------------
export const clearProducts = () => async (dispatch) => {
  dispatch({
    type: CLEAR_PRODUCTS,
  });
};

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
export const fetchProducts =
  (catalog, quantity, excludeId = null) =>
  async (dispatch) => {
    try {
      dispatch({
        type: SET_UI_LOADING,
        payload: { fetchLoader: true },
      });

      const excludeString = excludeId ? `_id[ne]=${excludeId}` : '';
      const { data } = await axios.get(
        `/api/v1/products?${excludeString}&catalog=${catalog}&limit=${quantity}&fields=name,slug,catalog,price,ratingsAverage,subcategory&sort=-sold,-createdAt`
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

// ------------------------------------------------------------------------
//  FETCH CLOTHING PRODUCTS
// ------------------------------------------------------------------------
export const fetchClothingProducts =
  (forW, category, quantity) => async (dispatch) => {
    try {
      dispatch({
        type: SET_UI_LOADING,
        payload: { fetchLoader: true },
      });

      const categoryString = category === 'todo' ? '' : `&category=${category}`;
      const forString = forW === 'general' ? '' : `&for=${forW}`;

      const { data } = await axios.get(
        `/api/v1/products?catalog=ropa${categoryString}${forString}&limit=${quantity}&fields=name,slug,catalog,price,ratingsAverage,subcategory&sort=-sold,-createdAt`
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
