import React, { useState, useEffect, useContext } from 'react';
import { SafeAreaView, Text, TextInput, TouchableOpacity } from 'react-native';

import styles from './styles';
import { SocketContext } from '../../utils/socket';
import { getDeviceId, getUsername, setUsername } from '../../utils/store';

const LandingScreen = ({ authenticated }) => {
  const socket = useContext(SocketContext);
  
  const [deviceId, setDeviceId] = useState(null);
  const [time, setTime] = useState(null);
  const [name, setName] = useState(null);

  useEffect(() => {
    async function getId() {
      const id = await getDeviceId();
      setDeviceId(id);
    }
    async function getName() {
      const tname = await getUsername();
      setName(tname);
    }

    getId();
    getName();
    
    socket.on('time-msg', (data) => {
      setTime(new Date(data.time).toString());
    });
    socket.on('createGame', (res) => {
      console.log(res.gameId);
    });
  }, [socket]);
  
  const createGame = async () => {
    const req = {
      url: 'create_game',
      id: deviceId
    }
    
    console.log('here');
    await socket.emit('gameAction', req);
  }
  
  return (
    <SafeAreaView style={styles.container}>
      <Text>Landing Screen</Text>
      <Text>{authenticated}</Text>
      <Text>{time}</Text>
      <Text>Device id: {deviceId}</Text>
      <TextInput
        onChangeText={(text) => {
          setUsername(text);
          setName(text);
        }}
        value={name}
        placeholder="Edit your name"
      />
      <TouchableOpacity style={styles.button} onPress={() => createGame()}> 
        <Text style={styles.lf}>Create Game</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default LandingScreen;