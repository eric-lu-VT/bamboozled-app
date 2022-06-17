import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Landing, WaitingRoom, GamePage, PlayerInfo, HelpPage, Settings } from './../containers';
import { getDeviceId, getUsername } from '../utils/store';
import HeaderButton from '../components/HeaderButton';
import Colors from '../utils/Colors';
import TextStyles from '../utils/TextStyles';

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
            headerLeft: () => null,
            headerShown: false,
            gestureEnabled: false
          }}
        />
        <Stack.Screen 
          name="Waiting Room" 
          component={WaitingRoom} 
          options={{
            headerLeft: () => null,
            headerStyle: {
              backgroundColor: Colors.primary.normal,
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              ...TextStyles.subTitle,
            },
            title: `${gameId}`
            // gestureEnabled: false
          }}
        />
        <Stack.Screen
          name="Game Page"
          component={GamePage}
          options={{
            headerLeft: () => null,
            headerStyle: {
              backgroundColor: Colors.primary.normal,
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              ...TextStyles.subTitle,
            },
            title: `${gameId}`
            // gestureEnabled: false
          }}
        />
        <Stack.Screen
          name="Player Info"
          component={PlayerInfo}
          options={{
            headerStyle: {
              backgroundColor: Colors.primary.normal,
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              ...TextStyles.subTitle,
            },
            title: `${gameId} - Player Info`,
            headerLeft: () =>
              <HeaderButton />
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
              ...TextStyles.subTitle,
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
              ...TextStyles.subTitle,
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