import {
  SET_ORDERS,
  ADD_ORDER,
  UPDATE_ORDER,
  DELETE_ORDER,
  CLEAR_ORDERS,
} from './ordersTypes';
import { SET_UI_LOADING, SET_UI_ERRORS, CLEAR_UI_ERRORS } from '../ui/uiTypes';
import { batch } from 'react-redux';
import axios from 'axios';

// ------------------------------------------------------------------------
//  CLEAR ORDERS
// ------------------------------------------------------------------------
export const clearOrders = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ORDERS,
  });
};

// ------------------------------------------------------------------------
//  FETCH ORDERS
// ------------------------------------------------------------------------
export const fetchOrders = (active) => async (dispatch) => {
  try {
    dispatch({
      type: SET_UI_LOADING,
      payload: { fetchLoader: true },
    });
    const { data } = await axios.get(
      `/api/v1/localOrders?active=${active}&sort=date`
    );

    batch(() => {
      dispatch({
        type: SET_ORDERS,
        payload: data.data,
      });
      dispatch({
        type: SET_UI_LOADING,
        payload: { fetchLoader: false },
      });
    });
  } catch (error) {
    console.log(error);
  }
};

// ------------------------------------------------------------------------
//  CREATE ORDER
// ------------------------------------------------------------------------
export const createOrder =
  (
    clientName,
    clientCellphone,
    clientEmail,
    employeeName,
    totalPrice,
    date,
    products
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

      const { data } = await axios.post(
        `/api/v1/localOrders/`,
        {
          clientName,
          clientCellphone,
          clientEmail,
          employeeName,
          totalPrice,
          date,
          products,
        },
        config
      );

      batch(() => {
        dispatch({
          type: ADD_ORDER,
          payload: data.data,
        });
        dispatch({
          type: SET_UI_LOADING,
          payload: { firstLoader: false },
        });
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
// ------------------------------------------------------------------------
//  UPDATE ORDER
// ------------------------------------------------------------------------
export const updateOrder =
  (
    id,
    clientName,
    clientCellphone,
    clientEmail,
    employeeName,
    totalPrice,
    date,
    products
  ) =>
  async (dispatch) => {
    try {
      dispatch({
        type: SET_UI_LOADING,
        payload: { secondLoader: true },
      });

      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const { data } = await axios.patch(
        `/api/v1/localOrders/${id}`,
        {
          clientName,
          clientCellphone,
          clientEmail,
          employeeName,
          totalPrice,
          date,
          products,
        },
        config
      );

      batch(() => {
        dispatch({
          type: UPDATE_ORDER,
          payload: data.data,
        });
        dispatch({
          type: SET_UI_LOADING,
          payload: { secondLoader: false },
        });
        dispatch({
          type: CLEAR_UI_ERRORS,
        });
      });
    } catch (error) {
      dispatch({
        type: SET_UI_ERRORS,
        payload: { errorsTwo: error.response.data.uiErrors },
      });
      dispatch({
        type: SET_UI_LOADING,
        payload: { secondLoader: false },
      });
      // checkUserPermissions(error, dispatch);
    }
  };

// ------------------------------------------------------------------------
//  DELETE ORDER
// ------------------------------------------------------------------------
export const deleteProductReview = (id) => async (dispatch) => {
  try {
    await axios.delete(`/api/v1/localOrders/${id}`);
    batch(() => {
      dispatch({
        type: DELETE_ORDER,
        payload: id,
      });
    });
  } catch (error) {
    if (
      error.response.data.message ===
      'You are not logged in! Please log in to get access'
    ) {
      window.location.reload();
    }
  }
};
