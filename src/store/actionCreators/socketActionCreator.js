import ActionTypes from '../../utils/store';

export function connectSocket() {
  return {
    type: 'socket',
    types: [
      ActionTypes.SOCKET_CONNECT, 
      ActionTypes.SOCKET_CONNECT_SUCCESS, 
      ActionTypes.SOCKET_CONNECT_FAIL
    ],
    promise: (socket) => socket.connect(),
  }
}

export function disconnectSocket() {
  return {
    type: 'socket',
    types: [
      ActionTypes.SOCKET_DISCONNECT,
      ActionTypes.SOCKET_DISCONNECT_SUCCESS,
      ActionTypes.SOCKET_DISCONNECT_FAIL
    ],
    promise: (socket) => socket.disconnect(),
  }
}