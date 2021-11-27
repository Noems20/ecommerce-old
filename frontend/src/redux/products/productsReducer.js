import { SET_PRODUCTS } from './productsTypes';

const initialState = {
  products: [],
  product: null,
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        products: [...action.payload],
      };
    default:
      return state;
  }
};

export default productsReducer;
