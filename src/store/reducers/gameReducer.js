import ActionTypes from '../../utils/store';

const initialState = {
  gameId: '',
  active: false,
  clients: {}
};

const reducer = (state = initialState, action) => {
  // console.log(action.type);
  // console.log(action.payload);
  switch (action.type) {
    case ActionTypes.START_GAME_RECEIVE_SUCCESS: 
      return {
        ...state,
        gameId: action.gameId,
        active: action.active,
        clients: action.clients,
      }
    case ActionTypes.JOIN_GAME_RECEIVE_SUCCESS:
      return {
        ...state,
        gameId: action.gameId,
        active: action.active,
        clients: action.clients,
      }
    default:
      return state;
  }
};

export default reducer;