import {
  SET_ORDERS,
  SET_ORDER,
  ADD_ORDER,
  UPDATE_ORDER,
  DELETE_ORDER,
  COMPLETE_ORDER,
  CLEAR_ORDERS,
} from './ordersTypes';
import { addItem, updateItem, deleteItem } from '../utils/reducerUtils';

const initialState = {
  orders: [],
  order: null,
};

const localOrderReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ORDERS:
      return {
        ...state,
        orders: [...action.payload],
      };
    case SET_ORDER:
      return {
        ...state,
        order: action.payload,
      };
    case ADD_ORDER:
      return {
        ...state,
        orders: addItem(action.payload, state.orders),
      };
    case UPDATE_ORDER:
      return {
        ...state,
        orders: updateItem(action.payload, state.orders),
      };
    case DELETE_ORDER:
    case COMPLETE_ORDER:
      return {
        ...state,
        orders: deleteItem(action.payload, state.orders),
      };
    case CLEAR_ORDERS:
      return initialState;
    default:
      return state;
  }
};

export default localOrderReducer;
