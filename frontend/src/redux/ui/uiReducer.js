import {
  UI_SET_ERRORS,
  UI_CLEAR_ERRORS,
  UI_LOADING,
} from '../constants/uiConstants';

const initialState = {
  loading: false,
  errors: null,
};

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case UI_SET_ERRORS:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };
    case UI_CLEAR_ERRORS:
      return {
        ...state,
        loading: false,
        errors: null,
      };
    case UI_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default uiReducer;
