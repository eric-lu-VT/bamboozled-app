import React from 'react';
import { SafeAreaView, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

const LandingScreen = ({  
  deviceId,
  username,
  createGame, 
}) => {
  const navigation = useNavigation();
  
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