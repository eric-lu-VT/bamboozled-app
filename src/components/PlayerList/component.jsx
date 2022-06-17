import React from 'react';
import { Text, View } from 'react-native';

import styles from './styles';

const PlayerList = ({
  clients
}) => {
  return (
    <View>
      {
        Object.keys(clients).length !== 0 &&
          Object.keys(clients).map((index) => (
            clients[index] !== undefined && clients[index].hasOwnProperty('username') && 
              <Text key={index} style={styles.text}>
                - {clients[index].username}
              </Text>
          ))
      }
    </View>
  )
}

export default PlayerList;
