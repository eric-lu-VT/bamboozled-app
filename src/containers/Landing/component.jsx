import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import { getDeviceId, getUsername, setUsername } from '../../utils/store';

const LandingScreen = ({ 
  authenticated, 
  connectSocket, 
  disconnectSocket,
  createGame, 
  createGameReceive 
}) => {
  const navigation = useNavigation();
  
  const [deviceId, setDeviceId] = useState(null);
  const [name, setName] = useState(null);

  useEffect(() => {
    async function setup() {
      const tid = await getDeviceId();
      setDeviceId(tid);
      const tname = await getUsername();
      setName(tname);
      await connectSocket()
        .then(() => createGameReceive());
    }
    
    setup();
    return () => disconnectSocket();
  }, []);
  
  return (
    <SafeAreaView style={styles.container}>
      <Text>Landing Screen</Text>
      <TouchableOpacity style={styles.button} onPress={() => createGame(deviceId)}> 
        <Text style={styles.lf}>Create Game</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Waiting Room')}> 
        <Text style={styles.lf}>Test</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
};

export default LandingScreen;