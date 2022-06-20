import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import Dice1 from '../../assets/dice1.png';
import Dice2 from '../../assets/dice2.png';
import Dice3 from '../../assets/dice3.png';
import Dice4 from '../../assets/dice4.png';
import Dice5 from '../../assets/dice5.png';
import Dice6 from '../../assets/dice6.png';

const Dice = ({ 
  value,
}) => {
  return (
    <View>
      {
        (value === 1) && 
          <Image
            style={styles.diceImg}
            source={{uri: Image.resolveAssetSource(Dice1).uri}}
          />
      }
      {
        (value === 2) && 
          <Image
            style={styles.diceImg}
            source={{uri: Image.resolveAssetSource(Dice2).uri}}
          />
      }
      {
        (value === 3) && 
          <Image
            style={styles.diceImg}
            source={{uri: Image.resolveAssetSource(Dice3).uri}}
          />
      }
      {
        (value === 4) && 
          <Image
            style={styles.diceImg}
            source={{uri: Image.resolveAssetSource(Dice4).uri}}
          />
      }
      {
        (value === 5) && 
          <Image
            style={styles.diceImg}
            source={{uri: Image.resolveAssetSource(Dice5).uri}}
          />
      }
      {
        (value === 6) && 
          <Image
            style={styles.diceImg}
            source={{uri: Image.resolveAssetSource(Dice6).uri}}
          />
      }
    </View>
  );
}

const styles = StyleSheet.create({
  diceImg: {
    width: 100,
    height: 100,
    margin: 5
  }
});

export default Dice;
