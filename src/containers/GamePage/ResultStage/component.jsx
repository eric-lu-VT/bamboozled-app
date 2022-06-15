import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

const ResultStage = ({
  isTurn,
  clients,
  dice1,
  dice2,
  turnResult,
  gameId,
  deviceId,
}) => {
  return (
    <View>
      <Text>
        Actual roll:
      </Text>
      <Text>
        Dice 1: {dice1}
      </Text>
      <Text>
        Dice 2: {dice2}
      </Text>
      <Text>
        Scores of either {dice1}{dice2} or {dice2}{dice1} are acceptable.
      </Text>
      {turnResult === 'honest-accept' && 
        <Text>
          honest-accept
        </Text>
      }
      {turnResult === 'honest-call' && 
        <Text>
          honest-call
        </Text>
      }
      {turnResult === 'bluff-accept' && 
        <Text>
          bluff-accept
        </Text>
      }
      {turnResult === 'bluff-call' && 
        <Text>
          bluff-call
        </Text>
      }
      {clients[deviceId] !== undefined && 
        clients[deviceId].hasOwnProperty('alive') && 
        clients[deviceId].alive && 
        <TouchableOpacity style={styles.button} onPress={() => {}}> 
          <Text style={styles.lf}>Ok</Text>
        </TouchableOpacity>
      }
    </View>
  );
}

export default ResultStage;