import React, { useState } from 'react';
import { SafeAreaView, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import { setUsername } from '../../utils/store';
import AppButton from '../../components/AppButton';

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
      <TextInput
        onChangeText={(text) => setName(text)}
        value={name}
        placeholder="Enter your name"
      />
      <AppButton
        onPress={handleSubmit}
        title="Save"
      />
    </SafeAreaView>
  );
};

export default Settings;