import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, TouchableOpacity } from 'react-native';
import AcceptStage from './AcceptStage';
import BeforeRollStage from './BeforeRollStage';
import AfterRollStage from './AfterRollStage';
import ResultStage from './ResultStage';

import styles from './styles';

const GamePage = ({
  curStage
}) => {
  return (
    <SafeAreaView style={styles.container}>
      { curStage === 'accept-stage' &&
        <AcceptStage />
      }
      {
        curStage === 'before-roll-stage' &&
        <BeforeRollStage />
      }
      { curStage === 'after-roll-stage' && 
        <AfterRollStage />
      }
      { curStage === 'result-stage' &&
        <ResultStage />
      }
    </SafeAreaView>
  );
}

export default GamePage;