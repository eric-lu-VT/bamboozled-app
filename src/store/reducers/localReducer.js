import ActionTypes from '../../utils/store';

const initialState = {
  deviceId: {},
  username: {},
  curCardSelected: '',
}

const reducer = (state = initialState, action) => {
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
    case ActionTypes.CHANGE_CUR_CARD_SELECTED:
      return {
        ...state,
        curCardSelected: action.card
      }
    default:
      return state;
  }
}

export default reducer;