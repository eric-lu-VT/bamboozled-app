import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

const AcceptStage = ({
  isTurn,
  clients,
  prevPlayerId,
  currentPlayerId,
  reportedDice1,
  reportedDice2,
}) => {
  return (
    <View>
      {clients[prevPlayerId] !== undefined && clients[prevPlayerId].hasOwnProperty('username') && 
        <Text>
          {clients[prevPlayerId].username} declares a score of {reportedDice1}{reportedDice2}.
        </Text>
      }
      {isTurn ?
        <View>
          <TouchableOpacity style={styles.button} onPress={() => {}}> 
            <Text style={styles.lf}>Accept</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => {}}> 
            <Text style={styles.lf}>Call Bluff</Text>
          </TouchableOpacity>
        </View>
        :
        <View>
          <Text>
            {clients[currentPlayerId] !== undefined && clients[currentPlayerId].hasOwnProperty('username') && 
              <Text>
                {clients[currentPlayerId].username} is deciding...
              </Text>
            }
          </Text>
        </View>
      }
    </View>
  );
}

export default AcceptStage;
