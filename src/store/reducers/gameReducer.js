import ActionTypes from '../../utils/store';

const initialState = {
  gameId: '',
  active: false,
  lives: 0,
  alive: false,
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
        lives: action.lives,
        alive: action.alive,
      }
    case ActionTypes.JOIN_GAME_RECEIVE_SUCCESS:
      return {
        ...state,
        gameId: action.gameId,
        active: action.active,
        lives: action.lives,
        alive: action.alive,
      }
    default:
      return state;
  }
};

export default reducer;