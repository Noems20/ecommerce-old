import {
  SET_PRODUCTS,
  SET_PRODUCT,
  SET_PRODUCT_LOADED,
  CLEAR_PRODUCTS,
} from './productsTypes';

const initialState = {
  products: [],
  product: {},
  productLoaded: false,
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        products: [...action.payload],
      };
    case SET_PRODUCT:
      return {
        ...state,
        product: action.payload,
      };

    case SET_PRODUCT_LOADED:
      return {
        ...state,
        productLoaded: action.payload,
      };
    case CLEAR_PRODUCTS:
      return initialState;
    default:
      return state;
  }
};

export default productsReducer;
