import React from 'react';
import { Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import styles from './styles';
import TextStyles from '../../utils/TextStyles';

const PlayerList = ({
  clients
}) => {
  return (
    <View>
      {
        Object.keys(clients).length !== 0 &&
          Object.keys(clients).map((index) => (
            clients[index] !== undefined && clients[index].hasOwnProperty('username') && 
              <Text key={index} style={TextStyles.regular}>
                - {clients[index].username}
              </Text>
          ))
      }
    </View>
  )
}

export default PlayerList;
