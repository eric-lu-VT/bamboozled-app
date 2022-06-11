import ActionTypes from '../../utils/store';

export function connectSocket() {
  return {
    type: 'socket',
    types: [
      ActionTypes.SOCKET_CONNECT, 
      ActionTypes.SOCKET_CONNECT_SUCCESS, 
      ActionTypes.SOCKET_CONNECT_FAIL
    ],
    promise: socket => socket.connect(),
  }
}