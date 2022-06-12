import ActionTypes from '../../utils/store';

export function createGame(deviceId, username) {
  const req = {
    url: 'create_game',
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
export function createGameReceive() {
  return (dispatch) => {
    const newRes = (res) => {
      return dispatch({
        type: ActionTypes.START_GAME_RECEIVE_SUCCESS,
        gameId: res.gameId,
        active: res.active,
        lives: res.lives,
        alive: res.alive,
      })
    }
    return dispatch({
      type: 'socket',
      types: [null, null, null],
      promise: (socket) => socket.on('createGame', newRes)
    })
  }
}

export function joinGame(deviceId, username, gameId) {
  const req = {
    url: 'join_game',
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
          lives: res.lives,
          alive: res.alive,
        })
      }
      else {
        return dispatch({
          type: ActionTypes.JOIN_GAME_RECEIVE_FAIL,
        })
      }
    }
    return dispatch({
      type: 'socket',
      types: [null, null, null],
      promise: (socket) => socket.on('joinGame', newRes)
    })
  }
}