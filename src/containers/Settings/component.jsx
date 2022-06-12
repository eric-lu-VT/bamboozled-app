import React, { useState } from 'react';
import { SafeAreaView, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import { setUsername } from '../../utils/store';

const Settings = ({
  username,
  changeUsername
}) => {
  const navigation = useNavigation();
  const [name, setName] = useState(username);

  const handleSubmit = async () => {
    await setUsername(name);
    changeUsername(name);
    navigation.navigate("Landing");
  }
  
  return (
    <SafeAreaView style={styles.container}>
      <Text>Settings Screen</Text>
      <TextInput
        onChangeText={(text) => setName(text)}
        value={name}
        placeholder="Enter your name"
      />
      <TouchableOpacity
        onPress={handleSubmit}
      >
        <Text>Save</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Settings;