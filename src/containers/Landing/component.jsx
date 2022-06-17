import React, { useState } from 'react';
import { Image, SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CharacterInput from 'react-native-character-input'

import styles from './styles';
import LogoImage from '../../assets/bamboozled_logo.jpg'
import AppButton from '../../components/AppButton'

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
      <Image
        style={styles.logoImg}
        source={{uri: Image.resolveAssetSource(LogoImage).uri}}
      />
      <AppButton
        onPress={() => {
          createGame(deviceId, username);
          navigation.navigate('Waiting Room')
        }}
        title="Create Game"
        isArrow='true'
      />
      <CharacterInput
        placeHolder='    '
        showCharBinary='1111'
        handleChange={(text) => tsetGameId(text)}
        inputType='underlined'
      />
      <AppButton
        onPress={() => {
          joinGame(deviceId, username, tgameId);
          navigation.navigate('Waiting Room');
        }}
        title="Join Game"
        isArrow='true'
      />
      <AppButton
        onPress={() => navigation.navigate('Help Page')}
        title="How To Play"
        isArrow='true'
      />
      <AppButton
        onPress={() => navigation.navigate('Settings')}
        title="Settings"
        isArrow='true'
      />
    </SafeAreaView>
  )
};

export default Landing;