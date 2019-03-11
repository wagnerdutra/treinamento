import api from "../../services/api";

/**
 * Types
 */

export const Types = {
  ADD_REQUEST: "favorites/ADD_REQUEST",
  ADD_SUCCESS: "favorites/ADD_SUCCESS",
  ADD_FAILURE: "favorites/ADD_FAILURE"
};

/**
 * Reducers
 */

const INITIAL_STATE = {
  loading: false,
  data: [],
  error: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.ADD_REQUEST:
      return { ...state, loading: true };
    case Types.ADD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: [...state.data, action.payload.data]
      };
    case Types.ADD_FAILURE:
      return { ...state, loading: false, error: action.payload.error };
    default:
      return state;
  }
};

/**
 * Actions
 */

export const Creators = {
  addFavoriteRequest: repository => dispatch => {
    dispatch({
      type: Types.ADD_REQUEST,
      payload: { repository }
    });
    api
      .get(`repos/${repository}`)
      .then(({ data }) => dispatch(Creators.addFavoriteSuccess(data)))
      .catch(error => dispatch(Creators.addFavoriteFailure("ERRO!")));
  },

  addFavoriteSuccess: data => ({
    type: Types.ADD_SUCCESS,
    payload: { data }
  }),

  addFavoriteFailure: error => ({
    type: Types.ADD_FAILURE,
    payload: { error }
  })
};
