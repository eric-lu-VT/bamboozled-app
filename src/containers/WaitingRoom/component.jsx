import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import PlayerList from '../../components/PlayerList';

const WaitingRoom = ({
  isHost
}) => { 
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Text>Waiting Room</Text>
      <PlayerList />
      {isHost && 
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Game Page')}> 
          <Text style={styles.lf}>Start Game</Text>
        </TouchableOpacity>
      }
    </SafeAreaView>
  ) 
}

export default WaitingRoom;