import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_ADD_ONE_ITEM,
} from '../constants/cartConstants';

import { addItemToCart } from './cartUtils';

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ONE_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    case CART_ADD_ITEM:
      const product = action.payload;

      const existItem = state.cartItems.find((x) => x._id === product._id);

      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x._id === existItem._id ? product : x
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, product],
        };
      }
    case CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x._id !== action.payload),
      };
    default:
      return state;
  }
};
