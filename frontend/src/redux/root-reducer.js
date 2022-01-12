import { combineReducers } from 'redux';

import localOrderReducer from './orders/ordersReducer';
import productsReducer from './products/productsReducer';
import cartReducer from './cart/cartReducer';
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
