export const Types = {
  ADD_REQUEST_USER: 'ADD_REQUEST_USER',
  ADD_REQUEST_USER_SUCCESS: 'ADD_REQUEST_USER_SUCCESS',
  ADD_REQUEST_USER_FAILURE: 'ADD_REQUEST_U_FAILURESER',
};

const INITIAL_STATE = {
  data: [],
  loading: false,
  error: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.ADD_REQUEST_USER:
      return { ...state, loading: true };
    case Types.ADD_REQUEST_USER_SUCCESS:
      return { ...state, loading: false, data: action.payload.data };
    case Types.ADD_REQUEST_USER_FAILURE:
      return { ...state, loading: false, error: action.payload.error };
    default:
      return state;
  }
};
