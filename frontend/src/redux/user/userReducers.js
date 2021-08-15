import {
  SET_USER,
  SET_USER_DETAILS,
  SET_USER_DETAILS_SUCCESS,
  USER_LOADING,
} from '../constants/userConstants';

export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_USER:
      return { userInfo: action.payload };
    default:
      return state;
  }
};

export const userDetailsReducer = (
  state = { userData: {}, success: false },
  action
) => {
  switch (action.type) {
    case USER_LOADING:
      return {
        ...state,
        loadingUser: true,
      };
    case SET_USER_DETAILS:
      return { userData: action.payload, loadingUser: false, success: false };
    case SET_USER_DETAILS_SUCCESS:
      return { ...state, success: action.payload };
    default:
      return state;
  }
};
