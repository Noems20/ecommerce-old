import { combineReducers } from 'redux';

import cartReducer from './cart/cartReducers';

const rootReducer = combineReducers({
  cart: cartReducer,
});

export default rootReducer;
