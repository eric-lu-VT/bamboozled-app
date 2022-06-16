import React, { useEffect } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import 'react-native-get-random-values'
import { useFonts, Raleway_400Regular, Raleway_600SemiBold, Raleway_800ExtraBold, } from '@expo-google-fonts/raleway';

import AppNavigator from './src/navigation'
import SocketClient from './src/utils/socketClient';
import configureStore from './src/store';

const socketClient = new SocketClient();
// socketClient.connect();
const store = configureStore(socketClient);

export default function App() {
  let [fontsLoaded] = useFonts({
    Raleway_400Regular,
    Raleway_600SemiBold,
    Raleway_800ExtraBold
  });

  if (!fontsLoaded) {
    return <View />
  }
  
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}