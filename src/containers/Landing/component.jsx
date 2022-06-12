import React, { useState } from 'react';
import { SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CharacterInput from 'react-native-character-input'

import styles from './styles';

const Landing = ({  
  deviceId,
  username,
  createGame, 
  joinGame
}) => {
  const navigation = useNavigation();

  const [tgameId, tsetGameId] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <Text>Landing Screen</Text>
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => {
          createGame(deviceId, username);
          navigation.navigate('Waiting Room')
        }
      }> 
        <Text style={styles.lf}>Create Game</Text>
      </TouchableOpacity>
      <CharacterInput
        placeHolder='    '
        showCharBinary='1111'
        handleChange={(text) => tsetGameId(text)}
        inputType='underlined'
      />
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => {
          joinGame(deviceId, username, tgameId);
          navigation.navigate('Waiting Room');
        }}> 
        <Text style={styles.lf}>Join Game</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Settings')}> 
        <Text style={styles.lf}>Settings</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
};

export default Landing;