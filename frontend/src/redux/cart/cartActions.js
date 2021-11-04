import axios from 'axios';

import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_ADD_ONE_ITEM,
} from './cartConstants';

export const addToCartOne = (product) => async (dispatch, getState) => {
  dispatch({
    type: CART_ADD_ONE_ITEM,
    payload: {
      _id: product._id,
      name: product.name,
      image: product.mainImage,
      price: product.price,
      countInStock: product.countInStock,
    },
  });

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

export const addToCartFromProduct =
  (product, qty) => async (dispatch, getState) => {
    dispatch({
      type: CART_ADD_ITEM,
      payload: {
        _id: product._id,
        name: product.name,
        image: product.mainImage,
        price: product.price,
        countInStock: product.countInStock,
        qty,
      },
    });

    localStorage.setItem(
      'cartItems',
      JSON.stringify(getState().cart.cartItems)
    );
  };

export const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/products/${id}`);

  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      _id: data._id,
      name: data.name,
      image: data.mainImage,
      price: data.price,
      countInStock: data.countInStock,
      qty,
    },
  });
  console.log(qty);
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: id,
  });
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};
