import ActionTypes from '../../utils/store';

export function createGame(deviceId) {
  const req = {
    url: 'create_game',
    id: deviceId
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
        gameId: res.gameId
      })
    }
    return dispatch({
      type: 'socket',
      types: [null, null, null],
      promise: (socket) => socket.on('createGame', newRes)
    })
  }
}