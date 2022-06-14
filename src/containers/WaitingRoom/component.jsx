import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import PlayerList from '../../components/PlayerList';

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
      <Text>Waiting Room</Text>
      <PlayerList />
      {isHost && 
        <TouchableOpacity style={styles.button} onPress={() => initGame(deviceId, gameId)}> 
          <Text style={styles.lf}>Start Game</Text>
        </TouchableOpacity>
      }
    </SafeAreaView>
  ) 
}

export default WaitingRoom;