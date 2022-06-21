import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';

import ActionCard from '../../components/ActionCard';
import styles from './styles';

const ActionCardHelp = ({

}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView 
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <ActionCard name="double" />
        <ActionCard name="fresh_start" />
        <ActionCard name="jackpot" />
        <ActionCard name="my_bad" />
        <ActionCard name="reverse" />
        <ActionCard name="revive" />
        <ActionCard name="skip" />
        <ActionCard name="up_down" />
      </ScrollView>
    </SafeAreaView>
  )
}

export default ActionCardHelp;
