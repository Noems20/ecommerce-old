import { UI_CLEAR_ERRORS } from '../constants/uiConstants';

export const clearErrors = () => (dispatch) => {
  dispatch({
    type: UI_CLEAR_ERRORS,
  });
};
