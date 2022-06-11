import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Landing, About, WaitingRoom } from './../containers';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const GameNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
      }}
    >
      <Stack.Screen name="Landing" component={Landing} />
      <Stack.Screen name="Waiting Room" component={WaitingRoom} />
    </Stack.Navigator>
  )
}

const TabNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="Landing">
      <Tab.Screen 
        name="Game" 
        options={{
          headerShown: false,
        }}
        component={GameNavigator} 
      />
      <Tab.Screen name="About" component={About} />
    </Tab.Navigator>
  );
};

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={TabNavigator} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;