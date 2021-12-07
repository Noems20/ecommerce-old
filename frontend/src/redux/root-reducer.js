import { combineReducers } from 'redux';

import localOrderReducer from './orders/ordersReducer';
import productsReducer from './products/productsReducer';
import cartReducer from './cart/cartReducers';
import userReducer from './user/userReducer';
import uiReducer from './ui/uiReducer';

const rootReducer = combineReducers({
  orders: localOrderReducer,
  products: productsReducer,
  cart: cartReducer,
  user: userReducer,
  ui: uiReducer,
});

export default rootReducer;
