import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, TouchableOpacity } from 'react-native';
import AcceptStage from './AcceptStage';
import ResultStage from './ResultStage';
import RollStage from './RollStage';

import styles from './styles';

const GamePage = ({
  curStage
}) => {
  return (
    <SafeAreaView style={styles.container}>
      { curStage === 'accept-stage' &&
        <AcceptStage />
      }
      { curStage === 'roll-stage' && 
        <RollStage />
      }
      { curStage === 'result-stage' &&
        <ResultStage />
      }
    </SafeAreaView>
  );
}

export default GamePage;