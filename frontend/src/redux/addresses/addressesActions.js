import axios from 'axios';
import {
  SET_UI_ERRORS,
  CLEAR_UI_ERRORS,
  SET_UI_LOADING,
  SET_SUCCESS,
} from '../ui/uiTypes';

import { SET_ADDRESSES } from './addressesTypes';

// --------------------------------------------------------------------
//                               SET ADDRESSES
// --------------------------------------------------------------------
export const setAddresses =
  (
    idx,
    state,
    city,
    postalcode,
    phone,
    suburb,
    address,
    references,
    instructions,
    defaultAddress = false
  ) =>
  async (dispatch) => {
    try {
      dispatch({
        type: SET_UI_LOADING,
        payload: { firstLoader: true },
      });
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const { data } = await axios.patch(
        `/api/v1/users/address/${idx}`,
        {
          default: defaultAddress,
          state,
          city,
          postalcode,
          phone,
          suburb,
          address,
          references,
          instructions,
        },
        config
      );

      dispatch({
        type: SET_ADDRESSES,
        payload: data.data,
      });
      dispatch({
        type: CLEAR_UI_ERRORS,
      });
      dispatch({
        type: SET_SUCCESS,
        payload: true,
      });
      dispatch({
        type: SET_UI_LOADING,
        payload: { firstLoader: false },
      });
    } catch (error) {
      dispatch({
        type: SET_UI_ERRORS,
        payload: { errorsOne: error.response.data.uiErrors },
      });
      dispatch({
        type: SET_UI_LOADING,
        payload: { firstLoader: false },
      });
    }
  };

// --------------------------------------------------------------------
//                               REMOVE ADDRESS
// --------------------------------------------------------------------
export const removeAddress = (idx) => async (dispatch) => {
  try {
    const { data } = await axios.delete(`/api/v1/users/address/${idx}`);

    dispatch({
      type: SET_ADDRESSES,
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: SET_UI_ERRORS,
      payload: { errorsOne: error.response.data.uiErrors },
    });
  }
};
