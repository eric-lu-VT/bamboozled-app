import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

const ResultStage = ({
  isTurn,
  dice1,
  dice2,
  turnResult,
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
      {turnResult === 'accept-correct' && 
        <Text>

        </Text>
      }
      {turnResult === 'accept-incorrect' && 
        <Text>
          
        </Text>
      }
      {turnResult === 'reject-correct' && 
        <Text>
          
        </Text>
      }
      {turnResult === 'reject-incorrect' && 
        <Text>
          
        </Text>
      }
    </View>
  );
}

export default ResultStage;