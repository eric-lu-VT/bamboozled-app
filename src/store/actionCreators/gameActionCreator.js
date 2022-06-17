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
      ActionTypes.CREATE_GAME_SEND,
      ActionTypes.CREATE_GAME_SEND_SUCCESS,
      ActionTypes.CREATE_GAME_SEND_FAIL
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
          ...res,
          type: ActionTypes.JOIN_GAME_RECEIVE_SUCCESS,
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
        ...res,
        type: ActionTypes.JOIN_GAME_RECEIVE_OTHER_SUCCESS,
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
          ...res,
          type: ActionTypes.GAME_RECONNECT_RECEIVE_SUCCESS,
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

export function initGame(deviceId, gameId) {
  const req = {
    url: 'initGame',
    id: deviceId,
    gameId
  }
  return {
    type: 'socket',
    types: [
      ActionTypes.INIT_GAME_SEND,
      ActionTypes.INIT_GAME_SEND_SUCCESS,
      ActionTypes.INIT_GAME_SEND_FAIL
    ],
    promise: (socket) => socket.emit('gameAction', req)
  }
}
export function initGameReceive() {
  return (dispatch) => {
    const newRes = (res) => {
      if(res.success) {
        return dispatch({
          ...res,
          type: ActionTypes.INIT_GAME_RECEIVE_SUCCESS,
        });
      }
      else {
        return dispatch({
          type: ActionTypes.INIT_GAME_RECEIVE_FAIL,
        });
      }
    }
    return dispatch({
      type: 'socket',
      types: [null, null, null],
      promise: (socket) => socket.on('initGame', newRes)
    });
  }
}

export function nextRound(deviceId, gameId) {
  const req = {
    url: 'nextRound',
    id: deviceId,
    gameId
  }
  return {
    type: 'socket',
    types: [
      ActionTypes.NEXT_ROUND_SEND,
      ActionTypes.NEXT_ROUND_SEND_SUCCESS,
      ActionTypes.NEXT_ROUND_SEND_FAIL
    ],
    promise: (socket) => socket.emit('gameAction', req)
  }
}
export function nextRoundReceive() {
  return (dispatch) => {
    const newRes = (res) => {
      if(res.success) {
        return dispatch({
          ...res,
          type: ActionTypes.NEXT_ROUND_RECEIVE_SUCCESS,
        });
      }
      else {
        return dispatch({
          type: ActionTypes.NEXT_ROUND_RECEIVE_FAIL,
        });
      }
    }
    return dispatch({
      type: 'socket',
      types: [null, null, null],
      promise: (socket) => socket.on('nextRound', newRes)
    });
  }
}

export function rollDice(deviceId, gameId) {
  const req = {
    url: 'rollDice',
    id: deviceId,
    gameId
  }
  return {
    type: 'socket',
    types: [
      ActionTypes.ROLL_DICE_SEND,
      ActionTypes.ROLL_DICE_SEND_SUCCESS,
      ActionTypes.ROLL_DICE_SEND_FAIL
    ],
    promise: (socket) => socket.emit('gameAction', req)
  }
}
export function rollDiceReceive() {
  return (dispatch) => {
    const newRes = (res) => {
      if(res.success) {
        return dispatch({
          ...res,
          type: ActionTypes.ROLL_DICE_RECEIVE_SUCCESS,
        });
      }
      else {
        return dispatch({
          type: ActionTypes.ROLL_DICE_RECEIVE_FAIL,
        });
      }
    }
    return dispatch({
      type: 'socket',
      types: [null, null, null],
      promise: (socket) => socket.on('rollDice', newRes)
    });
  }
}
export function rollDiceOtherReceive() {
  return (dispatch) => {
    const newRes = (res) => {
      return dispatch({
        ...res,
        type: ActionTypes.ROLL_DICE_OTHER_RECEIVE_SUCCESS,
      });
    }
    return dispatch({
      type: 'socket',
      types: [null, null, null],
      promise: (socket) => socket.on('rollDiceOther', newRes)
    });
  }
}

export function declareScore(deviceId, gameId, declareType, dice1, dice2) {
  const req = {
    url: 'declareScore',
    id: deviceId,
    gameId,
    declareType,
    dice1,
    dice2,
  }
  return {
    type: 'socket',
    types: [
      ActionTypes.DECLARE_SCORE_SEND,
      ActionTypes.DECLARE_SCORE_SEND_SUCCESS,
      ActionTypes.DECLARE_SCORE_SEND_FAIL,
    ],
    promise: (socket) => socket.emit('gameAction', req)
  }
}
export function declareScoreReceive() {
  return (dispatch) => {
    const newRes = (res) => {
      if(res.success) {
        return dispatch({
          ...res,
          type: ActionTypes.DECLARE_SCORE_RECEIVE_SUCCESS,
        });
      }
      else {
        return dispatch({
          type: ActionTypes.DECLARE_SCORE_RECEIVE_FAIL
        });
      }
    }
    return dispatch({
      type: 'socket',
      types: [null, null, null],
      promise: (socket) => socket.on('declareScore', newRes)
    });
  }
}
export function declareScoreOtherReceive() {
  return (dispatch) => {
    const newRes = (res) => {
      return dispatch({
        ...res,
        type: ActionTypes.DECLARE_SCORE_OTHER_RECEIVE_SUCCESS,
      });
    }
    return dispatch({
      type: 'socket',
      types: [null, null, null],
      promise: (socket) => socket.on('declareScoreOther', newRes)
    });
  }
}

export function acceptAttempt(deviceId, gameId, declareType) {
  const req = {
    url: 'acceptAttempt',
    id: deviceId,
    gameId,
    declareType,
  }
  return {
    type: 'socket',
    types: [
      ActionTypes.ACCEPT_ATTEMPT_SEND,
      ActionTypes.ACCEPT_ATTEMPT_SEND_SUCCESS,
      ActionTypes.ACCEPT_ATTEMPT_SEND_FAIL,
    ],
    promise: (socket) => socket.emit('gameAction', req)
  }
}
export function acceptAttemptReceive() {
  return (dispatch) => {
    const newRes = (res) => {
      return dispatch({
        ...res,
        type: ActionTypes.ACCEPT_ATTEMPT_RECEIVE_SUCCESS,
      });
    }
    return dispatch({
      type: 'socket',
      types: [null, null, null],
      promise: (socket) => socket.on('acceptAttempt', newRes)
    });
  }
}

export function handleOk(deviceId, gameId) {
  const req = {
    url: 'handleOk',
    id: deviceId,
    gameId,
  }
  return {
    type: 'socket',
    types: [
      ActionTypes.HANDLE_OK_SEND,
      ActionTypes.HANDLE_OK_SEND_SUCCESS,
      ActionTypes.HANDLE_OK_SEND_FAIL,
    ],
    promise: (socket) => socket.emit('gameAction', req)
  }
}
export function handleOkReceive() {
  return (dispatch) => {
    const newRes = (res) => {
      return dispatch({
        ...res,
        type: ActionTypes.HANDLE_OK_RECEIVE_SUCCESS,
      });
    }
    return dispatch({
      type: 'socket',
      types: [null, null, null],
      promise: (socket) => socket.on('handleOk', newRes)
    });
  }
}
