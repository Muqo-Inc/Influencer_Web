import {
  SET_ALERT,
  REMOVE_ALERT,
  INFLUENCER_FORM_STEP_INCREMENT,
  INFLUENCER_FORM_STEP_DECREMENT,
  INFLUENCER_FORM_ONCHANGE,
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
  CLEAR_ERROR,
  INFLUENCER_FORM_SUBMISSION_MODAL_CLOSE,
} from "../actions/actionsTypes";

const initialState = {
  influencers: [],
  influencer: null,
  formStep: 1,
  loading: true,
  error: null,
  sideBar: true,
  isAuthenticated: null,
  user: null,
  token: localStorage.getItem("token"),
  influencerFormSubmissionModalOpen: false,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_INFLUENCERS:
      return {
        ...state,
        influencers: payload,
        loading: false,
      };
    case GET_INFLUENCER:
      return {
        ...state,
        influencer: payload,
        loading: false,
        error: null,
      };
    case GET_INFLUENCER_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case CLEAR_ERROR:
      return {
        ...state,
        error: null,
        loading: false,
      };
    case INFLUENCER_FORM_STEP_INCREMENT:
      return {
        ...state,
        formStep: state.formStep + 1,
      };
    case INFLUENCER_FORM_STEP_DECREMENT:
      return {
        ...state,
        formStep: state.formStep - 1,
      };
    case INFLUENCER_FORM_SUBMIT_SUCCESS:
      return {
        ...state,
        influencers: [payload, ...state.influencers],
        loading: false,
        formStep: 1,
        influencerFormSubmissionModalOpen: true,
      };

    case INFLUENCER_FORM_SUBMIT_FAIL:
      return {
        ...state,
        error: payload,
        loading: false,
        influencerFormSubmissionModalOpen: false,
      };
    case INFLUENCER_FORM_SUBMISSION_MODAL_CLOSE:
      return {
        ...state,
        influencerFormSubmissionModalOpen: false,
      };
    case SET_ACTIVE_SIDE_BAR:
      return {
        ...state,
        sideBar: true,
      };
    case REMOVE_ACTIVE_SIDE_BAR:
      return {
        ...state,
        sideBar: false,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false,
      };

    case AUTH_ERROR:
    case LOGOUT:
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
      };
    case ADMIN_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload,
      };
    default:
      return state;
  }
}
