import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import PlayerList from '../../components/PlayerList';
import AppButton from '../../components/AppButton'

const WaitingRoom = ({
  gameId,
  active,
  isHost,
  deviceId,
  initGame,
}) => { 
  const navigation = useNavigation();

  useEffect(() => {
    if(active) {
      navigation.navigate('Game Page');
    }
  });

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.subtitle}>Waiting Room</Text>
      <PlayerList />
      {
        isHost && 
          <AppButton
            onPress={() => initGame(deviceId, gameId)}
            title='Start Game'
          />
      }
    </SafeAreaView>
  ) 
}

export default WaitingRoom;