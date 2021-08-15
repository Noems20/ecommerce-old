import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// Reducers
import {
  productListReducer,
  productDetailsReducer,
} from './product/productReducer';
import { userReducer, userDetailsReducer } from './user/userReducers';
import { cartReducer } from './cart/cartReducers';
import uiReducer from './ui/uiReducer';

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  user: userReducer,
  userDetails: userDetailsReducer,
  UI: uiReducer,
});

const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : [];

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null;

const initialState = {
  cart: { cartItems: cartItemsFromStorage },
  user: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
