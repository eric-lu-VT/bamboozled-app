import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Landing, WaitingRoom, GamePage, HelpPage, Settings } from './../containers';
import { getDeviceId, getUsername } from '../utils/store';
import Colors from '../utils/Colors';
import HeaderButton from '../components/HeaderButton';

const Stack = createStackNavigator();

const Navigator = ({ 
  gameId,
  connectSocket, 
  disconnectSocket,
  initializeUser, 
  joinGameReceive,
  joinGameOtherReceive,
  gameReconnectReceive,
  initGameReceive,
  nextRoundReceive,
  rollDiceReceive,
  rollDiceOtherReceive,
  declareScoreReceive,
  declareScoreOtherReceive,
  acceptAttemptReceive,
}) => {
  useEffect(() => {
    async function setup() {      
      initializeUser(await getDeviceId(), await getUsername());

      await connectSocket()
        .then(() => joinGameReceive())
        .then(() => joinGameOtherReceive())
        .then(() => gameReconnectReceive())
        .then(() => initGameReceive())
        .then(() => nextRoundReceive())
        .then(() => rollDiceReceive())
        .then(() => rollDiceOtherReceive())
        .then(() => declareScoreReceive())
        .then(() => declareScoreOtherReceive())
        .then(() => acceptAttemptReceive());
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
            headerLeft: () => null,
            title: `${gameId}`
            // gestureEnabled: false
          }}
        />
        <Stack.Screen
          name="Game Page"
          component={GamePage}
          options={{
            headerLeft: () => null,
            title: `${gameId}`
            // gestureEnabled: false
          }}
        />
        <Stack.Screen 
          name="Help Page" 
          component={HelpPage} 
          options={{
            headerStyle: {
              backgroundColor: Colors.primary.normal,
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerLeft: () =>
              <HeaderButton />
          }}
        />
        <Stack.Screen 
          name="Settings" 
          component={Settings} 
          options={{
            headerStyle: {
              backgroundColor: Colors.primary.normal,
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerLeft: () =>
              <HeaderButton />
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;