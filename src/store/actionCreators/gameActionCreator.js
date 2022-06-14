import ActionTypes from '../../utils/store';

export function createGame(deviceId, username) {
  const req = {
    url: 'createGame',
    id: deviceId,
    username
  }
  return {
    type: 'socket',
    types: [
      ActionTypes.START_GAME_SEND,
      ActionTypes.START_GAME_SEND_SUCCESS,
      ActionTypes.START_GAME_SEND_FAIL
    ],
    promise: (socket) => socket.emit('gameAction', req)
  }
}
export function joinGame(deviceId, username, gameId) {
  const req = {
    url: 'joinGame',
    id: deviceId,
    username,
    gameId
  }
  return {
    type: 'socket',
    types: [
      ActionTypes.JOIN_GAME_SEND,
      ActionTypes.JOIN_GAME_SEND_SUCCESS,
      ActionTypes.JOIN_GAME_SEND_FAIL
    ],
    promise: (socket) => socket.emit('gameAction', req)
  }
}
export function joinGameReceive() {
  return (dispatch) => {
    const newRes = (res) => {
      if(res.success) {
        return dispatch({
          type: ActionTypes.JOIN_GAME_RECEIVE_SUCCESS,
          gameId: res.gameId,
          active: res.active,
          isHost: res.isHost,
          clients: res.clients,
        });
      }
      else {
        return dispatch({
          type: ActionTypes.JOIN_GAME_RECEIVE_FAIL,
        });
      }
    }
    return dispatch({
      type: 'socket',
      types: [null, null, null],
      promise: (socket) => socket.on('joinGame', newRes)
    });
  }
}
export function joinGameOtherReceive() {
  return (dispatch) => {
    const newRes = (res) => {
      return dispatch({
        type: ActionTypes.JOIN_GAME_RECEIVE_OTHER_SUCCESS,
        clients: res.clients,
      });
    }
    return dispatch({
      type: 'socket',
      types: [null, null, null],
      promise: (socket) => socket.on('joinGameOther', newRes)
    });
  }
}
export function gameReconnectReceive() {
  return (dispatch) => {
    const newRes = (res) => {
      if(res.success) {
        return dispatch({
          type: ActionTypes.GAME_RECONNECT_RECEIVE_SUCCESS,
          gameId: res.gameId,
          active: res.active,
          isHost: res.isHost,
          isTurn: res.isTurn,
          clients: res.clients,
          currentPlayerId: res.currentPlayerId,
          prevPlayerId: res.prevPlayerId,
          reportedRoll: res.reportedRoll,
          dice1: res.dice1,
          dice2: res.dice2,
          curStage: res.curStage,
          turnResult: res.turnResult,
        });
      }
      else {
        return dispatch({
          type: ActionTypes.GAME_RECONNECT_RECEIVE_FAIL,
        });
      }
    }
    return dispatch({
      type: 'socket',
      types: [null, null, null],
      promise: (socket) => socket.on('gameReconnect', newRes)
    });
  }
}
