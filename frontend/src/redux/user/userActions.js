import {
  SET_USER,
  SET_USER_DETAILS,
  SET_USER_DETAILS_SUCCESS,
  USER_LOADING,
} from '../constants/userConstants';

import {
  UI_CLEAR_ERRORS,
  UI_LOADING,
  UI_SET_ERRORS,
} from '../constants/uiConstants';

import axios from 'axios';

// ---------------- LOG IN --------------
export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: UI_LOADING,
    });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.post(
      '/api/users/login',
      {
        email,
        password,
      },
      config
    );

    dispatch({
      type: SET_USER,
      payload: data,
    });
    dispatch({
      type: UI_CLEAR_ERRORS,
    });

    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: UI_SET_ERRORS,
      payload: error.response.data,
    });
  }
};

// ---------------- SIGN UP --------------
export const register =
  (name, email, password, confirmPassword) => async (dispatch) => {
    try {
      dispatch({
        type: UI_LOADING,
      });

      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const { data } = await axios.post(
        '/api/users',
        {
          name,
          email,
          password,
          confirmPassword,
        },
        config
      );

      dispatch({
        type: SET_USER,
        payload: data,
      });

      dispatch({
        type: UI_CLEAR_ERRORS,
      });

      localStorage.setItem('userInfo', JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: UI_SET_ERRORS,
        payload: error.response.data,
      });
    }
  };

// ---------------- LOGOUT --------------
export const logout = () => (dispatch) => {
  localStorage.removeItem('userInfo');
  dispatch({
    type: SET_USER,
    payload: null,
  });
  dispatch({
    type: SET_USER_DETAILS,
    payload: {},
  });
};

// ---------------- GET USER DETAILS --------------
export const getUserDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_LOADING,
    });

    const {
      user: { userInfo },
    } = getState();

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`/api/users/${id}`, config);

    dispatch({
      type: SET_USER_DETAILS,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

// ----------------------------- UPDATE USER DETAILS --------------
export const updateUserDetails =
  (name, password, confirmPassword) => async (dispatch, getState) => {
    try {
      dispatch({
        type: UI_LOADING,
      });

      const {
        user: { userInfo },
      } = getState();

      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.put(
        '/api/users/profile',
        {
          name,
          password,
          confirmPassword,
        },
        config
      );

      dispatch({
        type: SET_USER,
        payload: data,
      });

      dispatch({
        type: SET_USER_DETAILS,
        payload: data,
      });
      dispatch({
        type: SET_USER_DETAILS_SUCCESS,
        payload: true,
      });

      dispatch({
        type: UI_CLEAR_ERRORS,
      });
      setTimeout(() => {
        dispatch(clearUserDetailsSuccess());
      }, 3000);

      localStorage.setItem('userInfo', JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: UI_SET_ERRORS,
        payload: error.response.data,
      });
      dispatch({
        type: SET_USER_DETAILS_SUCCESS,
        payload: false,
      });
    }
  };

// ---------------- CLEAR USER DETAILS SUCCESS -------------
export const clearUserDetailsSuccess = () => (dispatch) => {
  dispatch({
    type: SET_USER_DETAILS_SUCCESS,
    payload: false,
  });
};
