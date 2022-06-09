import React from 'react';
import { Provider } from 'react-redux';

import store from './src/store';
import AppNavigator from './src/navigation'
import { socket, SocketContext } from './src/utils/socket';

export default function App() {
  return (
    <Provider store={store}>
      <SocketContext.Provider value={socket}>
        <AppNavigator />
      </SocketContext.Provider> 
    </Provider>
  );
}