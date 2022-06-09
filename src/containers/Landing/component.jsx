import React, { useState, useEffect, useContext } from 'react';
import { SafeAreaView, Text, TouchableOpacity } from 'react-native';

import styles from './styles';
import { SocketContext } from '../../utils/socket';

const LandingScreen = ({ authenticated }) => {
  const socket = useContext(SocketContext);
  const [time, setTime] = useState(null);

  useEffect(() => {
    socket.on('time-msg', (data) => {
      setTime(new Date(data.time).toString());
    });
  }, [socket]);
  
  return (
    <SafeAreaView style={styles.container}>
      <Text>Landing Screen</Text>
      <Text>{authenticated}</Text>
      <TouchableOpacity style={styles.button} onPress={() => console.log('test')}> 
        <Text style={styles.lf}>Test</Text>
      </TouchableOpacity>
      <Text>{time}</Text>
    </SafeAreaView>
  );
};

export default LandingScreen;