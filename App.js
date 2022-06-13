import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import 'react-native-get-random-values'

import AppNavigator from './src/navigation'
import SocketClient from './src/utils/socketClient';
import configureStore from './src/store';

const socketClient = new SocketClient();
// socketClient.connect();
const store = configureStore(socketClient);

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}