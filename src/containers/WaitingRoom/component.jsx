import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, TouchableOpacity } from 'react-native';

import styles from './styles';
import { getDeviceId, getUsername, setUsername } from '../../utils/store';

const WaitingRoomScreen = ({
  createGame
}) => {
  const [deviceId, setDeviceId] = useState(null);
  const [name, setName] = useState(null);
  
  useEffect(() => {
    async function setup() {
      const tid = await getDeviceId();
      setDeviceId(tid);
      const tname = await getUsername();
      setName(tname);
    }
    
    setup();
  }, []);
  
  return (
    <SafeAreaView style={styles.container}>
      <Text>Waiting Room</Text>
      <TouchableOpacity style={styles.button} onPress={() => createGame(deviceId)}> 
        <Text style={styles.lf}>Create Game</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default WaitingRoomScreen;