import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Landing, Settings, WaitingRoom } from './../containers';
import { getDeviceId, getUsername } from '../utils/store';

const Stack = createStackNavigator();

const Navigator = ({ 
  connectSocket, 
  disconnectSocket,
  initializeUser, 
  createGameReceive 
}) => {
  
  useEffect(() => {
    async function setup() {      
      initializeUser(await getDeviceId(), await getUsername());

      await connectSocket()
        .then(() => createGameReceive());
    }
    setup();
    return () => disconnectSocket();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Landing" 
          component={Landing}
          options={{ 
            headerShown: false
          }}
        />
        <Stack.Screen 
          name="Waiting Room" 
          component={WaitingRoom} 
          options={{
            headerShown: false,
            // gestureEnabled: false
          }}
        />
        <Stack.Screen 
          name="Settings" 
          component={Settings} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;