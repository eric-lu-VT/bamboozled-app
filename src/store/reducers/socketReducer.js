import ActionTypes from '../../utils/store';

const initialState = {
  connected: false
};

const reducer = (state = initialState, action) => {
  // console.log(`${action.type}_${action.status}`);
  // console.log(action);
  switch (action.type) {
    case ActionTypes.SOCKET_CONNECT_SUCCESS: 
      return {
        ...state,
        connected: true
      }
    case ActionTypes.SOCKET_DISCONNECT: 
      return {
        ...state,
        connected: false
      }
    default:
      return state;
  }
};

export default reducer;