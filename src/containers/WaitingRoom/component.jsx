import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

const WaitingRoom = ({
  gameId
}) => { 
  return (
    <SafeAreaView style={styles.container}>
      <Text>Waiting Room</Text>
      <Text>{gameId}</Text>
    </SafeAreaView>
  )
}

export default WaitingRoom;