import React, { createContext } from 'react';
import { io } from 'socket.io-client';

import { BACKEND_URL } from './constants';

const socket = io(BACKEND_URL, {
  transports: ['websocket'],
});
socket.on('connect', () => console.log('connected to socket'));
const SocketContext = createContext();

export { socket, SocketContext };