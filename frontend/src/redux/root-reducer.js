import { combineReducers } from 'redux';

import cartReducer from './cart/cartReducers';
import userReducer from './user/userReducer';
import uiReducer from './ui/uiReducer';

const rootReducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
  ui: uiReducer,
});

export default rootReducer;
