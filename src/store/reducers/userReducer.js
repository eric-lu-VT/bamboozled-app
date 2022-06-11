import ActionTypes from '../../utils/store';

const initialState = {
  deviceId: {},
  username: {},
}

const reducer = (state = initialState, action) => {
  console.log(action);
  
  switch (action.type) {
    case ActionTypes.INITIALIZE_USER:
      return {
        ...state,
        deviceId: action.deviceId,
        username: action.username
      }
    case ActionTypes.CHANGE_USERNAME:
      return {
        ...state,
        username: action.username
      }
    default:
      return state;
  }
}

export default reducer;