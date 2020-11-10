import { baseUrl } from "../../config/env";
import axios from "axios";

import {
  INFLUENCER_FORM_SUBMISSION_MODAL_CLOSE,
  SET_ALERT,
  REMOVE_ALERT,
  INFLUENCER_FORM_STEP_INCREMENT,
  INFLUENCER_FORM_STEP_DECREMENT,
  INFLUENCER_FORM_SUBMIT_SUCCESS,
  INFLUENCER_FORM_SUBMIT_FAIL,
  GET_INFLUENCERS,
  GET_INFLUENCER,
  SET_ACTIVE_SIDE_BAR,
  REMOVE_ACTIVE_SIDE_BAR,
  ADMIN_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_PROFILE,
  GET_INFLUENCER_ERROR,
} from "./actionsTypes";

export const nextStep = () => (dispatch) =>
  dispatch({
    type: INFLUENCER_FORM_STEP_INCREMENT,
  });

export const prevStep = () => (dispatch) =>
  dispatch({
    type: INFLUENCER_FORM_STEP_DECREMENT,
  });

//influencer form submission

// Add post
export const submitInfluencerForm = (formData) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.post(
      baseUrl ? ` ${baseUrl}/api/influencer` : `/api/influencer`,
      formData,
      config
    );
    dispatch({
      type: INFLUENCER_FORM_SUBMIT_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: INFLUENCER_FORM_SUBMIT_FAIL,
      payload: { msg: err, status: err },
    });
  }
};

// Get influencers
export const getInfluencers = () => async (dispatch) => {
  try {
    const res = await axios.get(
      baseUrl ? ` ${baseUrl}/api/influencers` : `/api/influencers`
    );

    dispatch({
      type: GET_INFLUENCERS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

// Get influencers
export const getAinfluencers = (id) => async (dispatch) => {
  try {
    const res = await axios.get(
      baseUrl ? ` ${baseUrl}/api/influencers/${id}` : `/api/influencers/${id}`
    );

    dispatch({
      type: GET_INFLUENCER,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};
// Get influencers
export const verifyExistingEmail = (email) => async (dispatch) => {
  try {
    const res = await axios.get(
      baseUrl ? ` ${baseUrl}/api/emails` : `/api/emails`
    );

    dispatch({
      type: GET_INFLUENCER,
      payload: res.data,
    });
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) =>
        dispatch({
          type: GET_INFLUENCER_ERROR,
          payload: error.msg,
        })
      );
    }
  }
};

//admin panel sidebar active sidebar

export const setActiveSidebar = () => (dispatch) => {
  dispatch({
    type: SET_ACTIVE_SIDE_BAR,
  });
};
export const setRemoveActiveSidebar = () => (dispatch) => {
  dispatch({
    type: REMOVE_ACTIVE_SIDE_BAR,
  });
};

export const closeFormSubmissionSuccessModal = () => (dispatch) => {
  dispatch({
    type: INFLUENCER_FORM_SUBMISSION_MODAL_CLOSE,
  });
};

// Load Admin
export const loadAdmin = () => async (dispatch) => {
  try {
    const res = await axios.get(
      baseUrl ? ` ${baseUrl}/api/admin/auth` : `/api/admin/auth`
    );

    dispatch({
      type: ADMIN_LOADED,
      payload: "Admin",
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

// Login Admin
export const login = (username, password) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ username, password });

  try {
    const res = await axios.post(
      baseUrl ? ` ${baseUrl}/api/admin/auth` : `/api/admin/auth`,
      body,
      config
    );

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });

    dispatch(loadAdmin());
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => console.log(error));
    }

    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

// Logout / Clear Profile
export const logout = () => (dispatch) => {
  dispatch({ type: CLEAR_PROFILE });
  dispatch({ type: LOGOUT });
};
