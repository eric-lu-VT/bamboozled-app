import React from 'react';
import { Text } from 'react-native';
import lowerLatin from '@jsamr/counter-style/presets/lowerLatin';
import MarkedList from '@jsamr/react-native-li';

import styles from './styles';

const PlayerList = ({
  clients
}) => {
  return (
    <MarkedList counterRenderer={lowerLatin}>
      {Object.keys(clients).length !== 0 &&
        Object.keys(clients).map((index) => (
          clients[index] !== undefined && clients[index].hasOwnProperty('username') && 
            <Text key={index}>
              {clients[index].username}
            </Text>
        ))
      }
    </MarkedList>
  )
}

export default PlayerList;
