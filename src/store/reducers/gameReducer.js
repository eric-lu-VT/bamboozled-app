import ActionTypes from '../../utils/store';

const initialState = {
  gameId: {},
};

const reducer = (state = initialState, action) => {
  // console.log(action.type);
  // console.log(action.payload);
  switch (action.type) {
    case ActionTypes.START_GAME_RECEIVE_SUCCESS: 
      return {
        ...state,
        gameId: action.gameId,
      }
    default:
      return state;
  }
};

export default reducer;