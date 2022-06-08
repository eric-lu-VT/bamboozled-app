import ActionTypes from '../../utils/store';

const initialState = {
  authenticated: false,
  users: {},
};

const reducer = (state = initialState, action) => {
  // console.log(`${action.type}_${action.status}`);
  // console.log(action.payload);
  switch (`${action.type}_${action.status}`) {
    case `${ActionTypes.FETCH_USER}_SUCCESS`: // Load user into { id: element } mapping
      return { ...state, users: action.payload.data };
    case `${ActionTypes.FETCH_USERS}_SUCCESS`: // Load users into { id: element } mapping
      return { ...state, users: { ...state.users, ...action.payload.data.reduce((accum, e) => ({ ...accum, [e._id]: e }), {}) } };
    case `${ActionTypes.DELETE_USER}_SUCCESS`: // Delete user from state
      return { ...state, users: {}};
    case `${ActionTypes.AUTH_USER}_SUCCESS`: // Update users if action provides user data
      return { ...state, authenticated: true, users: action.payload.data.user };
    case `${ActionTypes.DEAUTH_USER}_SUCCESS`:
      return { ...state, authenticated: false, users: {} };
    default:
      return state;
  }
};

export default reducer;