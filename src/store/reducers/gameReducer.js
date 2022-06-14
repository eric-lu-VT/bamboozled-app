import ActionTypes from '../../utils/store';

const initialState = {
  gameId: '',
  active: false,
  isHost: false,
  isTurn: false,
  clients: {},
  currentPlayerId: '',
  prevPlayerId: '',
  reportedRoll: 0,
  dice1: 0,
  dice2: 0,
  curStage: '',
  turnResult: '',
};

const reducer = (state = initialState, action) => {
  // console.log(action.type);
  // console.log(action.payload);
  switch (action.type) {
    case ActionTypes.JOIN_GAME_RECEIVE_SUCCESS:
      return {
        ...state,
        gameId: action.gameId,
        active: action.active,
        isHost: action.isHost,
        clients: action.clients,
      }
    case ActionTypes.JOIN_GAME_RECEIVE_OTHER_SUCCESS:
      return {
        ...state,
        clients: action.clients,
      }
    case ActionTypes.GAME_RECONNECT_RECEIVE_SUCCESS:
      return {
        ...state,
        gameId: action.gameId,
        active: action.active,
        isHost: action.isHost,
        isTurn: action.isTurn,
        clients: action.clients,
        currentPlayerId: action.currentPlayerId,
        prevPlayerId: action.prevPlayerId,
        reportedRoll: action.reportedRoll,
        dice1: action.dice1,
        dice2: action.dice2,
        curStage: action.curStage,
        turnResult: action.turnResult,
      }
    case ActionTypes.INIT_GAME_RECEIVE_SUCCESS:
      return {
        ...state,
        gameId: action.gameId,
        active: action.active,
        isHost: action.isHost,
        isTurn: action.isTurn,
        clients: action.clients,
        currentPlayerId: action.currentPlayerId,
        prevPlayerId: action.prevPlayerId,
        reportedRoll: action.reportedRoll,
        dice1: action.dice1,
        dice2: action.dice2,
        curStage: action.curStage,
        turnResult: action.turnResult,
      }
    case ActionTypes.NEXT_ROUND_RECEIVE_SUCCESS:
      return {
        ...state,
        gameId: action.gameId,
        active: action.active,
        isHost: action.isHost,
        isTurn: action.isTurn,
        clients: action.clients,
        currentPlayerId: action.currentPlayerId,
        prevPlayerId: action.prevPlayerId,
        reportedRoll: action.reportedRoll,
        dice1: action.dice1,
        dice2: action.dice2,
        curStage: action.curStage,
        turnResult: action.turnResult,
      }
    case ActionTypes.ROLL_DICE_RECEIVE_SUCCESS:
      return {
        ...state,
        dice1: action.dice1,
        dice2: action.dice2,
        curStage: action.curStage,
      }
    case ActionTypes.ROLL_DICE_OTHER_RECEIVE_SUCCESS:
      return {
        ...state,
        curStage: action.curStage,
      }
    default:
      return state;
  }
};

export default reducer;